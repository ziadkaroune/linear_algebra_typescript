import { Vector } from "./Vector";
import {Matrix} from "./Matrix" 
 function main(){

    //// test Vector
    try{
            let u = new Vector([1 , 2 , 8]);
            let v = new Vector([2 , 4]);
            const scl = 3;
            u.add(v);
            u.printv();
    }
    catch(err){
        if(err instanceof Error)
                 console.log(err.message);
    }

    //// test Matrix

    try{
            let u = new Vector([1 , 2 , 8]);
            let v = new Vector([2 , 4]);
            //const scl = 3;
            u.add(v);
            u.printv();
    }
    catch(err){
        if(err instanceof Error)
                 console.log(err.message);
    }
}
main();