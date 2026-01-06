import Link from "next/link";

export default function Homepage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-black text-center">
        <h1 className="text-2xl font-bold mb-2">
          Welcome 👋
        </h1>

        <p className="text-gray-600 mb-6 text-sm">
          Please login to continue
        </p>

        <Link
          href="/login"
          className="block w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Go to Login Page
        </Link>
      </div>
    </div>
  );
}
