import { Controller, Get, Param } from "@nestjs/common";
import { getAllFlashcards, getFlashcardById } from "data/api/fake-api";
import { Flashcard } from "data/model/flashcard";

@Controller({path: 'flashcards'})
export class FlashcardsController {
    @Get()
    async getAllFlashcards(): Promise<Flashcard[]>{
        return getAllFlashcards()
    }

    @Get(':languageId')
    async getFlashcardsByLanguageId(@Param('languageId') languageId): Promise<Flashcard>{
        return getFlashcardById(languageId)
    }

}