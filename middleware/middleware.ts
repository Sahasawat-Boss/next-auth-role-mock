import { withAuth } from "next-auth/middleware";

export default withAuth(
    {
        callbacks: {
            authorized: ({ token }) => {
                // ✅ ต้องมี token เท่านั้นถึงผ่าน
                return !!token;
            },
        },
        pages: {
            signIn: "/login",
        },
    }
);

export const config = {
    matcher: ["/menu/:path*"],
};
