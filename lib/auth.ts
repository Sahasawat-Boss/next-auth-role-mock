import Credentials from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (
                    credentials?.email === "admin@test.com" &&
                    credentials?.password === "1234"
                ) {
                    return {
                        id: "1",
                        name: "Boss Admin",
                        email: "admin@test.com",
                    };
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
};
