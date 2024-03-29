import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class AuthDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  // @IsString()
  // @MinLength(6)
  password: string;

  fullname?: string;

  avatar?: string;
}

export class LoginDto extends PartialType(AuthDto) {}
