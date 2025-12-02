import { Controller, Post, Body, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.login(registerUserDto);
  }

  @Get('all')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
}
