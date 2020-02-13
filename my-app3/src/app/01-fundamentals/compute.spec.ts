import { compute } from "./compute";

describe('compute', ()=>{

    //test1
    it('should increment given number if it is positive', ()=>{
            const result = compute(1)
            expect(result).toBe(2)        
    })

    //test2
    it('should return 0 if given number is negative', ()=>{
        const result = compute(-1);
        expect(result).toBe(0)
    })

})