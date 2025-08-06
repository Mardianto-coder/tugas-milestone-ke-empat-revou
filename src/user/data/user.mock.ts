import { UserDTO, RoleUser } from "../entities/user.entities";

export const mockUsers: UserDTO[] = [
  {
    id: 1,
    email: "user1@example.com",
    name: "User One",
    phone: "081234567890",
    number_ktp: "1234567890123456",
    password: "hashedpassword",
    role_user: RoleUser.ADMIN,
  },
  // Add more mock users as needed
];