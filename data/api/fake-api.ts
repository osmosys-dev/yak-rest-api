
import {  FLASHCARDS, LANGUAGES } from "data/data/dummy";
import { Language } from "data/model/language";



  export function findAllLanguages(): Language[] {
    return Object.values(LANGUAGES);
  }
  
  export function findLanguageById(languageId: number) {
    return LANGUAGES[languageId];
  }
  
  export function findFlashcardForLanguage(languageId: number) {
    return Object.values(FLASHCARDS).filter(flashcard => flashcard.languageId == languageId);
  }


  