
import { Vector } from "../class/Vector.ts";
import { angle_cos } from './angle_cos.ts'

(()=>{
    try{

let a = new Vector([1., 0.]);
let b = new Vector([1., 0.]);
 
// 0.0
let d = new Vector([1., 0.]);
let e = new Vector([ 0., 1]);
 
// -1.0
let f = new Vector([2., 1.]);
let g = new Vector([4., 2.]);
 
// 1.0
let k = new Vector([1., 2., 3.]);
let l = new Vector([4., 5., 6.]);
  
// 0.974631846

          
            console.log("a cos b = " , angle_cos(a , b));
            console.log("d cos e = " , angle_cos(d , e));
            console.log("f cos g = " , angle_cos(f , g));
            console.log("k cos l = " , angle_cos(k , l));
    }
    catch(err){
        if(err instanceof Error)
            console.error(err.message);
    }
})()