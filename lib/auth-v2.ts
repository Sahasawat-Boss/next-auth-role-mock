import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { findUserByCredentials } from "./ีusers/user.service";

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const user = await findUserByCredentials(
          credentials.username,
          credentials.password
        );

        if (!user) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          phone: user.phone,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.phone = user.phone;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role!;
        session.user.phone = token.phone!;
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};
