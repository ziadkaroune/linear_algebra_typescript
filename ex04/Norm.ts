import { Vector } from "../class/Vector.ts";

(()=>{
    let a = new Vector([1, 2 , 3]);
    let b = new Vector([-1 , -2]);
    
    const a_norm_1 = a.norm_1();
    const a_norm_2 = a.norm_2();
    const a_norm_inf = a.norm_inf();

    const b_norm_1 = b.norm_1();
    const b_norm_2 = b.norm_2();
    const b_norm_inf = b.norm_inf();

    console.log(`a  :  norm_1 = ${a_norm_1} , norm_2 = ${a_norm_2} , norm_inf = ${a_norm_inf }`);
    console.log("----------------------------------------------------")
    console.log(`b  :  norm_1 = ${b_norm_1} , norm_2 = ${b_norm_2} , norm_inf = ${b_norm_inf }`);

})()