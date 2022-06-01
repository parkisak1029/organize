import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [UsersModule, CatsModule],
})
export class AppModule { }
