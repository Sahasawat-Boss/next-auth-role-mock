import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import LogoutButton from "@/components/logout-button";

export default async function MenuPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white p-10">
            <div className="flex justify-between gap-4">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome "{session.user?.name}"
                </h1>
                <div >
                    <LogoutButton />
                </div>
            </div>

            <ul className="space-y-3">
                <li className="bg-gray-800 p-4 rounded">📊 Dashboard</li>
                <li className="bg-gray-800 p-4 rounded">📦 Products</li>
                <li className="bg-gray-800 p-4 rounded">⚙️ Settings</li>
            </ul>


        </div>
    );
}
