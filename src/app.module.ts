import { Module } from '@nestjs/common';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { LanguagesModule } from './languages/languages.module';


@Module({
  imports: [LanguagesModule,FlashcardsModule],
})
export class AppModule {}
