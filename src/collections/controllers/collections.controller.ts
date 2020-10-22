import { Controller, Get, Param } from "@nestjs/common";
import { findAllCollections, findCollectionById } from "data/api/fake-api";
import { Collection } from "data/model/collection";

@Controller({path:'collections'})
export class CollectionsController {
    @Get()
    async findAllCollections(): Promise<Collection[]>{
       return findAllCollections()
    }

    @Get(':collectionId')
    async findCollectionById(@Param('collectionId') collectionId){
        return findCollectionById(collectionId)
    }
}