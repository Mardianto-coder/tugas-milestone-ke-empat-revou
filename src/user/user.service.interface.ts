import { UserDTO } from './entities/user.entities';
import { CreateUserDto } from './dto/req/create.user.dto';

export interface IUserService {
  create(createUserDto: CreateUserDto): UserDTO;
  findAll(): UserDTO[];
  findOne(id: number): UserDTO | undefined;
}