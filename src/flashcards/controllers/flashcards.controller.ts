import { Controller, Get, Query } from "@nestjs/common";
import { getFlashcardsByLanguageId} from "data/api/fake-api";
import { Flashcard } from "data/model/flashcard";

@Controller({path: 'flashcards'})
export class FlashcardsController {
    @Get()
    async getFlashcardsByLanguageId(@Query('languageId') languageId): Promise<Flashcard[]>{
        return getFlashcardsByLanguageId(languageId)
    }


}