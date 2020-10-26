import { Module } from "@nestjs/common";
import { LanguagesController } from "./controllers/languages.controller";

@Module({
    controllers: [LanguagesController]
})
export class LanguagesModule {}