import { UserRepository } from './user.repository';
import { UserDTO } from './entities/user.entities';

describe('UserRepository', () => {
  let repo: UserRepository;

  beforeEach(() => {
    repo = new UserRepository();
  });

  it('should create a user', () => {
    const user: UserDTO = {
      id: 1,
      email: 'test@example.com',
      name: 'Test User',
      phone: '081234567890',
      number_ktp: '1234567890123456',
      password: 'password',
      role_user: 'ADMIN',
    };
    expect(repo.create(user)).toEqual(user);
  });

  it('should find all users', () => {
    expect(repo.findAll()).toBeInstanceOf(Array);
  });

  it('should find one user by id', () => {
    const user: UserDTO = {
      id: 2,
      email: 'test2@example.com',
      name: 'Test User 2',
      phone: '081234567891234',
      number_ktp: '1234567890123457',
      password: 'password2',
      role_user: 'CUSTOMER',
    };
    repo.create(user);
    expect(repo.findOne(2)).toEqual(user);
  });
});