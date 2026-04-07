import { Vector } from "../class/Vector.ts";

function Norm(){
    let a = new Vector([1, 2 , 3]);
    //let b = new Vector([3 , 2]);
    
    const norm_1 = a.norm_1();
    const norm_2 = a.norm_2();
    const norm_inf = a.norm_inf();
    console.log(`norm_1 = ${norm_1} , norm_2 = ${norm_2} , norm_inf = ${norm_inf }`);

}

Norm();