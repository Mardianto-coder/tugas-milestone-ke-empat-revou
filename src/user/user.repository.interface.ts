import { UserDTO } from './entities/user.entities';

export interface IUserRepository {
  create(user: UserDTO): UserDTO;
  findAll(): UserDTO[];
  findOne(id: number): UserDTO | undefined;
}