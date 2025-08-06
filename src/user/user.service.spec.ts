import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/req/create.user.dto';

describe('UserService', () => {
  let service: UserService;
  let repo: UserRepository;

  beforeEach(() => {
    repo = new UserRepository();
    service = new UserService(repo);
  });

  it('should create a user', () => {
    const dto: CreateUserDto = {
      email: 'test@example.com',
      name: 'Test User',
      phone: '081234567890',
      number_ktp: '1234567890123456',
      password: 'password',
      role_user: 'ADMIN',
    };
    const user = service.create(dto);
    expect(user.email).toBe(dto.email);
  });

  it('should find all users', () => {
    expect(service.findAll()).toBeInstanceOf(Array);
  });

  it('should find one user by id', () => {
    const dto: CreateUserDto = {
      email: 'test2@example.com',
      name: 'Test User 2',
      phone: '081234567891234',
      number_ktp: '1234567890123457',
      password: 'password2',
      role_user: 'CUSTOMER',
    };
    const user = service.create(dto);
    expect(service.findOne(user.id)).toEqual(user);
  });
});