import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {


    @IsString({message : '$property must be a string '})
    @IsNotEmpty({message: '$property should not be empty '})
    @MinLength(3,{ message: '$property must be at least $constraint1 characters'} )
    @MaxLength(30,{message : '$property must be at most $constraint1 characters'})
    name : String;


    @IsEmail ({},{message : ' $property must be a valid email address'})
    @IsNotEmpty({message: '$property should not be empty' })
    email :  String ;



    @IsOptional()
    @IsEnum(['admin', 'user'],{message: '$property must be either admin or user'})
    role ?: 'admin' | 'user';
}
