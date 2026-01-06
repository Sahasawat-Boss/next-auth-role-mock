export type Role = "admin" | "user";

export interface AppUser {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  role: Role;
  phone: string;
}
