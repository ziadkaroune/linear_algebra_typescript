
import {linear_combination} from './linear_combination.ts'
import { Vector } from '../class/Vector.ts';


(()=>{
            let e1 =  new Vector([1., 0., 0.]);
            let e2 =  new Vector([0., 1., 0.]);
            let e3 =  new Vector([0., 0., 1.]);

            let v1 = new  Vector([1., 2., 3.]);
            let v2 = new  Vector([0., 10., -100.]);
    try{
            const result1 = linear_combination([e1 , e2 , e3] , [10, -2.,0.5]);
            const result2 = linear_combination([v1, v2], [10., -2.]);
            result1.printv();
            console.log("--------------------------------");
            result2.printv();
    }
    catch(err){
             if(err instanceof Error)
                 console.log(err.message);
    }
})()
