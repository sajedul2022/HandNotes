import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [
      {
        name: 'John Doe',
        email: '9dH0j@example.com',
      },
    ];
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
  createUser(@Body() userData: CreateUserDto) {
    log(userData);
    return 'User created';
  }
}
