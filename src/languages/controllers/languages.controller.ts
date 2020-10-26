import { Controller, Get, Param } from "@nestjs/common";
import {  findAllLanguages, findLanguageById } from "data/api/fake-api";
import { Language } from "data/model/language";

@Controller({path:'languages'})
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