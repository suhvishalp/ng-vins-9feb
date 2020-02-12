import { Genre } from './genre.mode';

export class Movie{
    constructor(
        public _id:string="",
        public title:string="",
        public numberInStock:number=0,
        public dailyRentalRate:number=0,
        public genre:Genre=null,
        public genreId:string=""
    ){

    }
}