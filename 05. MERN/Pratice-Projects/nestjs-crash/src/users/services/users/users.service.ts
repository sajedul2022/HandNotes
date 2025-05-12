import { Injectable } from '@nestjs/common';
import e from 'express';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {

    private users = [
          {
            name: 'John Doe',
            email: '9dH0j@example.com',
            
          },
          {
            name: 'Rab hole',
            email: 'rab@example.com',
            
          },
          {
            name: 'korry hole',
            email: 'korry@example.com',
          },
        ];

    fetchUsers() {
        return this.users;
    }

    createUser(userDetails: CreateUserType){
        this.users.push(userDetails);
    }

    fetchUserById(id: number){
        return { id, user:"sajedul", email:"9dH0j@example.com"};
        // return null;
    }
}
