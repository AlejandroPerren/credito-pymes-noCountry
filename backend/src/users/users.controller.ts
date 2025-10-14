import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.usersService.findOne({ dni });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':dni')
  update(@Param('dni') dni: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(dni, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.usersService.remove(dni);
  }
}
