import {
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

import films, { Film } from '../../films';

interface FavoriteItem extends Film {
  quantity: number;
}

interface Favorite {
  favoriteItems: FavoriteItem[];
}

const initialFavorite = (indexes: number[]): Favorite => ({
  favoriteItems: indexes.map((index) => ({
    ...films[index],
    quantity: 1,
  })),
});

@Controller('favorite')
export class FavoriteController {
  private favorites: Record<number, Favorite> = {
    1: initialFavorite([0, 2, 4]),
    2: initialFavorite([1, 3]),
  };

  constructor() {}

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
      (favoriteItem) => favoriteItem.id === parseInt(id),
    );
    if (favoriteItem) {
      favoriteItem.quantity += 1;
    } else {
      favorite.favoriteItems.push({
        ...films.find((film) => film.id === parseInt(id)),
        quantity: 1,
      });
    }
    return favorite;
  }

  @Delete()
  @UseGuards(JwtAuthGuard)
  async destroy(@Request() req): Promise<Favorite> {
    this.favorites[req.user.userId] = { favoriteItems: [] };
    return this.favorites[req.user.userId];
  }
}