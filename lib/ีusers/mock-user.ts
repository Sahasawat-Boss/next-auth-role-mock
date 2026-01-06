import { AppUser } from "./types";

export const mockUsers: AppUser[] = [
  {
    id: "1",
    username: "admin",
    password: "123",
    name: "Admin",
    email: "admin@test.com",
    role: "admin",
    phone: "admin123456789",
  },
  {
    id: "2",
    username: "user",
    password: "123",
    name: "User",
    email: "user@test.com",
    role: "user",
    phone: "user123456789",
  },
  {
    id: "3",
    username: "123",
    password: "123",
    name: "User123",
    email: "user123@test.com",
    role: "user",
    phone: "user123456789",
  },
];
