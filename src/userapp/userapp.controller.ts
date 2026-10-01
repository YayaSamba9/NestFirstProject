import {
  Controller, Get, Post, Body, Patch, Param, Delete, HttpCode,
  BadRequestException, Query, NotFoundException, ParseIntPipe,
} from '@nestjs/common';
import { UserappService } from './userapp.service.js';
import { Prisma } from '@prisma/client';

@Controller('userapp')
export class UserappController {
  constructor(private readonly userappService: UserappService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUser: Prisma.UserCreateInput) {
    const user = await this.userappService.create(createUser);
    if (!user) throw new BadRequestException('Failed to create user');
    return user;
  }

  @Get()
  @HttpCode(200)
  async findAll(@Query('role') role?: string) {
    return this.userappService.findAll(role); // un tableau vide est une réponse valide
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userappService.findOne(id);
    if (!user) throw new NotFoundException('User not found'); // 404, pas 400
    return user;
  }

  @Patch(':id')
  @HttpCode(200)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUser: Prisma.UserUpdateInput,
  ) {
    return this.userappService.update(id, updateUser);
  }

  @Delete(':id')
  @HttpCode(200)
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.userappService.remove(id);
  }
}