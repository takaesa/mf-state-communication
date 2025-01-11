import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { FavoriteModule } from './modules/favorite/favorite.module';
import { FilmsModule } from './modules/films/films.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';

@Module({
  controllers: [AppController],
  providers: [UsersService],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    FavoriteModule,
    FilmsModule,
    AuthModule,
  ],
})
export class AppModule {}
