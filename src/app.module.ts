import { Module } from '@nestjs/common';
import { CollectionsModule } from './collections/controllers/collections.module';

@Module({
  imports: [CollectionsModule],
})
export class AppModule {}
