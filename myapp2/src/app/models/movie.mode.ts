import { Genre } from './genre.mode';

export class Movie{
    constructor(
        public _id:string,
        public title:string,
        public numberInStock:number,
        public dailyRentalRate:number,
        public genre:Genre
    ){

    }
}