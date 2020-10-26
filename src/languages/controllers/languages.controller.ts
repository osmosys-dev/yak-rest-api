import { Controller, Get, Param } from "@nestjs/common";
import { getLanguageById, getAllLanguages } from "data/api/fake-api";
import { Language } from "data/model/language";

@Controller({path:'languages'})
export class LanguagesController {
    @Get()
    async getAllLanguages(): Promise<Language[]>{
       return getAllLanguages();
    }

    @Get(':languageId')
    async getLanguageById(@Param('languageId') languageId){
        return getLanguageById(languageId);
    }
}