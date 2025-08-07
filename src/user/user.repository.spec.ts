import { UserDTO } from './entities/user.entities';

export class UserRepository {
  private users: UserDTO[] = [];

  create(user: UserDTO): UserDTO {
    this.users.push(user);
    return user;
  }

  findAll(): UserDTO[] {
    return this.users;
  }

  findOne(id: number): UserDTO | undefined {
    return this.users.find(user => user.id === id);
  }
}