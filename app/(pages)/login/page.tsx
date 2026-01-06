"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await signIn("credentials", {
            username,
            password,
            callbackUrl: "/menu",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-80 text-black">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

                {/* 🔔 Error Notice */}
                {error === "CredentialsSignin" && (
                    <div className="mb-4 rounded bg-red-100 text-red-700 text-sm p-2 text-center">
                        ❌ Invalid credentials.
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <input
                        className="w-full border p-2 rounded mb-3"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className="w-full border p-2 rounded mb-4"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
                    >
                        Login
                    </button>
                </form>

                <p className="text-xs text-center mt-3">admin / 1234</p>
            </div>
        </div>
    );
}
