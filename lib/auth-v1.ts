import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Admin
        if (
          credentials?.username === "admin" &&
          credentials?.password === "123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@test.com",
            role: "admin",
          };
        }

        // Normal User
        if (
          credentials?.username === "user" &&
          credentials?.password === "123"
        ) {
          return {
            id: "2",
            name: "User",
            email: "user@test.com",
            role: "user",
          };
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // ตอน login ใหม่
    //   JWT callback (ฝัง role ลง token)
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role!;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};
