import { IsEmail, IsString, Matches, IsEnum } from "class-validator";
import { RoleUser } from "../../entities/user.entities";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @Matches(/^\d{10,15}$/, { message: 'Phone must be a valid number' })
  phone: string;

  @Matches(/^\d{16}$/, { message: 'KTP must be 16 digits' })
  number_ktp: string;

  @IsString()
  password: string;

  @IsEnum(RoleUser, { message: 'role_user must be a valid RoleUser value' })
  role_user: RoleUser;
}