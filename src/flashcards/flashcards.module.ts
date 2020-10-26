import { Module } from "@nestjs/common";
import { FlashcardsController } from "./controllers/flashcards.controller";

@Module({
    controllers: [FlashcardsController]
})

export class FlashcardsModule {}