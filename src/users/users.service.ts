import { Injectable, NotFoundException } from '@nestjs/common';
import type { User } from '../../types/usersType.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { NotFoundError } from 'rxjs';
@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id :  1,
            'name' : 'Yahya',
            'email' : 'yahya9@gmail.com',
            'role' : 'admin',
        },
        {
            id :  2,
            'name' : 'Aboulma',
            'email' : 'Aboulma10@gmail.com',
            'role' : 'admin',
        },
        {
            id :  3,
            'name' : 'Abdoullah',
            'email' : 'Abdoullah19@gmail.com',
            'role' : 'admin',
        },
        {
            id :  4,
            'name' : 'Bamby',
            'email' : 'Bamby29@gmail.com',
            'role' : 'admin',
        },
        {
            id :  5,
            'name' : 'Souley',
            'email' : 'Souley39@gmail.com',
            'role' : 'admin',
        },
        {
            id :  6,
            'name' : '6797',
            'email' : 'Bamby29@gmail.com',
            'role' : 'admin',
        },
    ];

    findAll() : User[] {
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find((user) => user.id === id);
        if (!user){
            throw new NotFoundException('User Not Found ')
        }
        return  user ; 
    }

    create(createUser: CreateUserDto): User {
    const newId = (this.users.length + 1);
    const newUser: User = {
        name: createUser.name,
        email: createUser.email,
        role: createUser.role,
        id: newId,
    };
    this.users.push(newUser);
    return newUser;
    }

    update(id : number, updateUser : UpdateUserDto): User {
        const index = this.users.findIndex((user) => user.id === id);
        if (index === -1){
            throw new NotFoundException ('User Not Found');
        }
        this.users[index] = {
            name: updateUser.name,
            email: updateUser.email,
            role: updateUser.role,
            id
        } ;
        return this.users[index];
    }

    delete(id:number): string{ 
        this.users = this.users.filter((user) => user.id !== id);
        if (this.users.length === this.users.length){
            throw new NotFoundException('User Not Found ')
        }
        return ' User deleted successfully';
    }
    
}
