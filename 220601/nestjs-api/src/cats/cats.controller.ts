import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCatDto } from './createCatDto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return 'this action returns all cats'
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a ${id} cat`;
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        return 'This action adds a new cat'
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
        return `This action updates a ${id} cat`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This delete a ${id} cat`
    }
}
