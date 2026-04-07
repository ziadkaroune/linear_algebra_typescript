
import {linear_combination} from './linear_combination.ts'
import { Vector } from '../class/Vector.ts';
function main(){
    try{
    let e1 =  new Vector([1., 0., 0.]);
    let e2 =  new Vector([0., 1., 0.]);
    let e3 =  new Vector([0., 0., 1.]);

    linear_combination([e1 , e2 , e3] , [10, -2.,0.5]);
    }
    catch(err){
             if(err instanceof Error)
                 console.log(err.message);
    }
}

main();