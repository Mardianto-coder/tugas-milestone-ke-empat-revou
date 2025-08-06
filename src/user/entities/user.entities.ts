export enum RoleUser {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
  // Add other roles as needed
}

export interface UserDTO {
  id: number;
  email: string;
  name: string;
  phone: string;
  number_ktp: string;
  password: string;
  role_user: RoleUser;
}