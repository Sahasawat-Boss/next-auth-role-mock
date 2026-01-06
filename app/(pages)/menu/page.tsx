import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import LogoutButton from "@/components/logout-button";

export default async function MenuPage() {
    const session = await getServerSession(authOptions);
    const role = session?.user?.role;

    const isAdmin = role === "admin";

    return (
        <div className="min-h-screen bg-white text-black pt-16 p-10">
            <div className="flex justify-between gap-4 border-b pb-4">
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Welcome, {session?.user?.name}
                    </h1>
                    <p>Role: {role}</p>
                </div>
                <div >
                    <LogoutButton />
                </div>
            </div>

            <ul className="space-y-4 mt-8">
                {/* 👤 User + Admin */}
                <li className="p-4 bg-gray-200 border shadow-md rounded">
                    📊 Dashboard
                </li>
                <li className="p-4 bg-gray-200 border shadow-md rounded">
                    💻 Task
                </li>
                <li className="p-4 bg-gray-200 border shadow-md rounded">
                    📆 Calendar
                </li>

                {/* 👑 Admin only */}
                {isAdmin && (
                    <>
                        <li className="p-4 bg-gray-200 border shadow-md rounded">
                            📦 Products
                        </li>
                        <li className="p-4 bg-gray-200 border shadow-md rounded">
                            ⚙️ Settings
                        </li>
                    </>
                )}
            </ul>

        </div>
    );
}
