import { Controller, Get, Param } from "@nestjs/common";
import {  findAllFlashcardsForLanguage } from "data/api/fake-api";

@Controller({path:'language'})
export class LanguageController {
    @Get(':languageId')
    async findAllFlashcardsForLanguage(@Param('languageId') languageId){
        return findAllFlashcardsForLanguage(languageId)
     }
} 