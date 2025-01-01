import {
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import films, { Film } from 'src/films';
import { parse } from 'path';

interface FilmItem extends Film {
  favorite: boolean;
}

interface Favorite {
  favoriteItems: FilmItem[];
}

const initialFavorite = (indexes: number[]): Favorite => ({
  favoriteItems: indexes.map(index => ({ ...films[index], favorite: true }))
})

@Controller('favorite')
export class FavoriteController {
  private favorites: Record<number, Favorite> = {
    1: initialFavorite([0, 2, 4]),
    2: initialFavorite([1, 3]),
  }

  constructor() { }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Favorite> {
    return this.favorites[req.user.userId] ?? { favoriteItems: [] };
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Request() req, @Body() { id }: { id: string }): Promise<Favorite> {
    const favorite = this.favorites[req.user.userId];
    const favoriteItem = favorite.favoriteItems.find(
      (favoriteItem) => favoriteItem.id === parseInt(id)
    );
    if (favoriteItem) {
      favoriteItem.favorite = !favoriteItem.favorite;
    }
    else {
      favorite.favoriteItems.push({
        ...films.find((film) => film.id === parseInt(id)),
        favorite: true,
      })
    }
    return favorite;
  }
}
