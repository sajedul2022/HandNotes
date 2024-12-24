import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // find all users get request
  findUsers() {
    return this.userRepository.find();
  }

  // find user by id get request
  findUsersByID(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  // create user post request
  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  // update user by id

  updateUser(id: number, updateUserDetails: UpdateUserParams) {
    return this.userRepository.update({id}, { ...updateUserDetails });
  }

  // delete user by id  
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }
  
}
