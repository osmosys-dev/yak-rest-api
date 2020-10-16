import { Module } from '@nestjs/common';
import { LanguageModule } from './languages/languages.module';

@Module({
  imports: [LanguageModule],
})
export class AppModule {}
