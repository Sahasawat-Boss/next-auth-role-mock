import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-v2";

import LogoutButton from "@/components/logout-button";

export default async function MenuPage() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    const phone = session?.user?.phone;
    const role = session?.user?.role;

    const isAdmin = role === "admin";

    console.log(session?.user);

    return (
        <div className="min-h-screen bg-white text-black pt-16 p-10">
            <div className="flex justify-between gap-4 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Welcome, {session?.user?.name}
                    </h1>
                    <div className="bg-gray-100 rounded p-2">
                        <p>Role: {role}</p>
                        <p>Email: {email}</p>
                        <p>Phone: {phone}</p>
                    </div>
                </div>
                <div >
                    <LogoutButton />
                </div>
            </div>

            <ul className="space-y-4 mt-8">
                {/* 👤 User + Admin */}
                <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                    📊 Dashboard
                </li>
                <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                    📒 Task
                </li>
                <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                    📆 Calendar
                </li>
                <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                    🌐 Global Connect
                </li>

                {/* 👑 Admin only */}
                {isAdmin && (
                    <>
                        <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                            📦 Products
                        </li>
                        <li className="p-4 bg-gray-200 border shadow-md rounded hover:scale-105 hover:translate-x-3 transform duration-200">
                            ⚙️ Settings
                        </li>
                    </>
                )}
            </ul>

        </div>
    );
}
