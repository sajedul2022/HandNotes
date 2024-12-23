import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
import { get } from 'http';
import { Validate } from 'class-validator';
import { UsersService } from 'src/users/services/users/users.service';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAllUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUsersPost() {
    return [
      {
        name: 'John Doe',
        email: '9dH0j@example.com',
        post: [
          {
            id: 1,
            title: 'First Post',
          },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostComments() {
    return [
      {
        id: 1,
        title: 'First Post',
        comments: [
          {
            id: 1,
            text: ' Comment one ',
          },
        ],
      },
    ];
  }

  //   @Post('create')
  //   createUser(@Req() request: Request, @Res() response: Response) {
  //     log(request.body);
  //     response.send('User created');
  //   }

  // Alternative use @Body decorator

  @Post('create')
  @UsePipes(new ValidationPipe)
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    log(userData);
    return this.userService.createUser(userData);
  }

  // @Parameters('id') get method
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }
}
