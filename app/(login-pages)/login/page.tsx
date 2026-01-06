"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await signIn("credentials", {
            email,
            password,
            callbackUrl: "/menu",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-80 text-black">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

                <input
                    className="w-full border p-2 rounded mb-3"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full border p-2 rounded mb-4"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handleLogin}
                    className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                >
                    Login
                </button>

                <p className="text-xs text-center mt-3">
                    admin@test.com
                </p>
                <p className="text-xs text-center mt-3">
                    1234
                </p>
            </div>
        </div>
    );
}
