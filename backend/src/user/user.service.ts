import { Injectable, ConflictException, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './user.schema';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<{ message: string; user: { email: string; createdAt: Date } }> {
    const { email, password } = registerUserDto;

    try {
      // Check if user already exists
      const existingUser = await this.userModel.findOne({ email }).exec();
      if (existingUser) {
        throw new ConflictException('Email already registered');
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create new user
      const newUser = new this.userModel({
        email,
        password: hashedPassword,
        createdAt: new Date(),
      });

      const savedUser = await newUser.save();

      // Return success response without password
      return {
        message: 'User registered successfully',
        user: {
          email: savedUser.email,
          createdAt: savedUser.createdAt,
        },
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to register user. Please try again.');
    }
  }

  async login(registerUserDto: RegisterUserDto): Promise<{ message: string; user: { email: string } }> {
    const { email, password } = registerUserDto;

    try {
      // Find user by email
      const user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Compare password with hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid email or password');
      }

      // Return success response
      return {
        message: 'Login successfully',
        user: {
          email: user.email,
        },
      };
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to login. Please try again.');
    }
  }

  async getAllUsers(): Promise<{ count: number; users: Array<{ email: string; createdAt: Date }> }> {
    try {
      const users = await this.userModel.find().select('email createdAt -_id').exec();
      return {
        count: users.length,
        users: users.map(user => ({
          email: user.email,
          createdAt: user.createdAt,
        })),
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch users');
    }
  }
}
