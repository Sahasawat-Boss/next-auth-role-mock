import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";

import LogoutButton from "@/components/logout-button";

export default async function MenuPage() {
    const session = await getServerSession(authOptions);

  // ❌ เอา redirect ออก
  // if (!session) {
  //   redirect("/login");
  // }

    return (
        <div className="min-h-screen bg-white text-black pt-16 p-10">
            <div className="flex justify-between gap-4 border-b pb-4">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome "{session?.user?.name}"
                </h1>
                <div >
                    <LogoutButton />
                </div>
            </div>

            <ul className="space-y-4 mt-8">
                <li className="p-4 bg-gray-200 border shadow-md rounded">📊 Dashboard</li>
                <li className="p-4 bg-gray-200 border shadow-md rounded">📦 Products</li>
                <li className="p-4 bg-gray-200 border shadow-md rounded">⚙️ Settings</li>
            </ul>


        </div>
    );
}
