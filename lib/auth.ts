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
                    };
                }

                return null;
            }

        }),
    ],
    pages: {
        signIn: "/login",
    },
};
