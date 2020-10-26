import { Module } from "@nestjs/common";
import { LanguageController } from "./controllers/language.controller";
import { LanguagesController } from "./controllers/languages.controller";

@Module({
    controllers:[LanguagesController, LanguageController]
})
export class LanguagesModule {}