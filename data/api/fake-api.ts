import { FLASHCARDS, LANGUAGES } from "data/data/dummy";
import { Flashcard } from "data/model/flashcard";
import { Language } from "data/model/language";


// Languages
export function getAllLanguages(): Language[]{
    return Object.values(LANGUAGES);
}
export function getLanguageById(languageId: string):Language{
    return LANGUAGES[languageId];
}

// Flashcards
export function getAllFlashcards(): Flashcard[] {
    return Object.values(FLASHCARDS);
}
export function getFlashcardById(languageId: string):Flashcard{
    return FLASHCARDS[languageId];
}