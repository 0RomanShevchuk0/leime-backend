import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemesService } from './memes.service';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';

@Controller('memes')
export class MemesController {
  constructor(private readonly memesService: MemesService) {}

  @Post()
  create(@Body() createMemeDto: CreateMemeDto) {
    return this.memesService.create(createMemeDto);
  }

  @Get()
  findAll() {
    return this.memesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemeDto: UpdateMemeDto) {
    return this.memesService.update(+id, updateMemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memesService.remove(+id);
  }
}
