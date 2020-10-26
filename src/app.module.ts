import { Module } from '@nestjs/common';
import { CollectionsModule } from './collections/controllers/collections.module';
import { LanguagesModule } from './languages/languages.module';

@Module({
  imports: [CollectionsModule, LanguagesModule],
})
export class AppModule {}
