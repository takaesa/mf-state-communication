import { Controller, Get, Param } from '@nestjs/common';

import films, { Film } from '../../films'

@Controller('films')
export class FilmsController {
  constructor() {}

  @Get()
  async index(): Promise<Film[]> {
    return films;
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<Film> {
    return films.find((film) => film.id === parseInt(id));
  }
}
