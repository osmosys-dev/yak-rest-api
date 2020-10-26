import { FLASHCARDS, LANGUAGES } from "data/data/dummy";
import { Flashcard } from "data/model/flashcard";
import { Language } from "data/model/language";


// Languages
export function getAllLanguages(): Language[]{
    return Object.values(LANGUAGES)
}
export function getLanguageByUrl(languageUrl: string):Language{
    return LANGUAGES[languageUrl]
}

// Flashcards
export function getAllFlashcards(): Flashcard[] {
    return Object.values(FLASHCARDS)
}
export function getFlashcardsByLanguageId(languageId: string):Flashcard[]{
    return FLASHCARDS[languageId]
}
