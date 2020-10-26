import { Controller, Get, Param } from "@nestjs/common";
import { getLanguageByUrl } from "data/api/fake-api";
import { Language } from "data/model/language";

@Controller({path:'languages'})
export class LanguagesController {
    @Get()
    async getAllLanguages(): Promise<Language[]>{
       return this.getAllLanguages();
    }

    @Get(':languageUrl')
    async getLanguageByUrl(@Param('languageUrl') languageUrl){
        return getLanguageByUrl(languageUrl);
    }
}