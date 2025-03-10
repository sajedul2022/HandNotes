import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { log } from 'console';
import { create } from 'domain';
import { get } from 'http';
import { UsersInterceptor } from 'src/interceptors/user.interceptors';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseInterceptors(UsersInterceptor)
  async getUsers() {
    log('Inside getUsers handler by Interceptor');
    const users = await this.userService.findUsers();
    return users;
  }

  @Get(':id')
  async getUsersById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.findUsersByID(id);
    return user;
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUser(id);
  }

  // profile routes with users and profile
  @Post(':id/profiles')
   createProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ){
     return this.userService.createUserProfile(id, createUserProfileDto);
  }

  // Post routes with users and post one to many relationship
  @Post(':id/posts')
   createPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserPostDto: CreateUserPostDto,
  ){
     return this.userService.createUserPost(id, createUserPostDto);
  }
}
 