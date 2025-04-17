import { Injectable } from '@nestjs/common';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MemesService {
  constructor(private prismaService: PrismaService) {}

  create(createMemeDto: CreateMemeDto) {
    return this.prismaService.meme.create({
      data: createMemeDto,
    });
  }

  findAll() {
    return this.prismaService.meme.findMany({ orderBy: { id: 'asc' } });
  }

  findOne(id: number) {
    return this.prismaService.meme.findUnique({
      where: { id },
    });
  }

  update(id: number, updateMemeDto: UpdateMemeDto) {
    return this.prismaService.meme.update({
      where: { id },
      data: updateMemeDto,
    });
  }

  remove(id: number) {
    return this.prismaService.meme.delete({
      where: { id },
    });
  }
}
