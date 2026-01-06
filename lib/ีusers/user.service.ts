import { mockUsers } from "./mock-user";
import { AppUser } from "./types";

export async function findUserByCredentials(
  username: string,
  password: string
): Promise<AppUser | null> {
  const user = mockUsers.find(
    (u) => u.username === username && u.password === password
  );

  return user ?? null;
}


// 📌 ตอนต่อ DB → เปลี่ยนแค่ไฟล์นี้