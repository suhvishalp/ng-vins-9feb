export class Course {

    constructor(
        private _courseId: number,
        private _cName: string,
        private _fees: number,
        private _duration: string,
        private _trainer: string,
        private _startDate: Date,
        private _desc: string
    ) {}

    public get courseId(){
        return this._courseId;
    }

    public set courseId(value){
        //
        this._courseId = value;
    }
}


