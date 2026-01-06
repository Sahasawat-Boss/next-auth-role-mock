"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // ❗ กัน reload หน้า
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

                <p className="text-xs text-center mt-3">user</p>
                <p className="text-xs text-center">123</p>
            </div>
        </div>
    );
}
