import { Controller, Get, Param } from "@nestjs/common";
import { findAllCollections, findAllLanguages, findCollectionById, findLanguageById, findLanguageForCollection } from "data/api/fake-api";
import { Collection } from "data/model/collection";
import { Language } from "data/model/language";

@Controller({path:'collections/:collectionId'})
export class LanguagesController {
    @Get()
    async findAllLanguages(): Promise<Language[]>{
        return findAllLanguages()
     }

    @Get(':languageId')
    async findLanguageById(@Param('languageId') languageId){
        return findLanguageById(languageId)
    }
}