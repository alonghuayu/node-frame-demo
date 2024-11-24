import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ForbiddenException,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto, ListAllEntities } from './dto/dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/filter/http-exception.filter';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UseFilters(HttpExceptionFilter)
  async create(@Body() createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
    throw new ForbiddenException();
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    // throw new ForbiddenException();
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}

// import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
// import { Response } from 'express';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Res() res: Response) {
//     res.status(HttpStatus.CREATED).send();
//   }

//   @Get()
//   findAll(@Res() res: Response) {
//     res.status(HttpStatus.OK).json([]);
//   }
// }
