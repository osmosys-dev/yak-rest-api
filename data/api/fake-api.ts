
import {  COLLECTIONS, CONVERSATIONS, LANGUAGES, VERBS, VOCABULARIES } from "data/data/dummy";
import { Collection  } from "data/model/collection";
import { Language } from "data/model/language";


// Collections
  export function findAllCollections(): Collection[] {
    return Object.values(COLLECTIONS);
  }
  
  export function findCollectionById(collectionId: number) {
    return COLLECTIONS[collectionId];
  }
  
  export function findLanguageForCollection(collectionId: number) {
    return Object.values(LANGUAGES).filter(language => language.collectionId == collectionId);
  }

// Languages
  export function findAllLanguages(): Language[] {
    return Object.values(LANGUAGES);
  }

  export function findLanguageById(languageId: number) {
    return LANGUAGES[languageId];
  }
  export function findFlashcardForLanguage(languageId: number) {
    const flashcard = {...findConversationForLanguage(languageId), ...findVerbForLanguage(languageId), ...findVocabularyForLanguage(languageId)}

    return flashcard
  }
  
   function findConversationForLanguage(languageId: number) {
    return Object.values(CONVERSATIONS).filter(conversation => conversation.languageId == languageId);
  }
   function findVerbForLanguage(languageId: number) {
    return Object.values(VERBS).filter(verb => verb.languageId == languageId);
  }
   function findVocabularyForLanguage(languageId: number) {
    return Object.values(VOCABULARIES).filter(vocabulary => vocabulary.languageId == languageId);
  }