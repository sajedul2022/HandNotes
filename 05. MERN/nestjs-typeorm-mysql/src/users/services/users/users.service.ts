import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { Post } from 'src/typeorm/entities/Post';
import { Profile } from 'src/typeorm/entities/Profile';
import { User } from 'src/typeorm/entities/User';
import {
  CreateUserParams,
  CreateUserPostParams,
  CreateUserProfileParams,
  UpdateUserParams,
} from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  // find all users get request
  findUsers() {
    return this.userRepository.find({ relations: ['profile', 'posts'] });
  }

  // find user by id get request
  findUsersByID(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['profile', 'posts'],
    });
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
    return this.userRepository.update({ id }, { ...updateUserDetails });
  }

  // delete user by id
  deleteUser(id: number) {
    return this.userRepository.delete({ id });
  }

  // create user profile

  async createUserProfile(
    id: number,
    createUserProfileDetails: CreateUserProfileParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newProfile = this.profileRepository.create(createUserProfileDetails);
    const savedProfile = await this.profileRepository.save(newProfile);
    user.profile = savedProfile;
    return this.userRepository.save(user);
  }

  // create user post
  async createUserPost(
    id: number,
    createUserPostDetails: CreateUserPostParams,
  ) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Post',
        HttpStatus.BAD_REQUEST,
      );

    const newPost = this.postRepository.create({
      ...createUserPostDetails,
      user,
    });
    const savedPost = await this.postRepository.save(newPost);
    return savedPost;
  }
}
