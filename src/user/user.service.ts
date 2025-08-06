import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/req/create.user.dto';
import { UserDTO } from './entities/user.entities';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto): UserDTO {
    const user: UserDTO = {
      id: Date.now(), // Replace with proper ID generation
      ...createUserDto,
    };
    return this.userRepository.create(user);
  }

  findAll(): UserDTO[] {
    return this.userRepository.findAll();
  }

  findOne(id: number): UserDTO | undefined {
    return this.userRepository.findOne(id);
  }
}