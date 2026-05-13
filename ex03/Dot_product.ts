import { Vector } from "../class/Vector.ts";


//a⋅b=a1​b1​+a2​b2​+a3​b3
(()=>{

    let a = new Vector([-1 , 6]);
    let b = new Vector([3 , 2]);

    const opa = a.dot(b);
    console.log(opa);

    ///////////////////////////////

    let c = new Vector([1 , 1]);
    let d = new Vector([1 , 1]);

    const opc = c.dot(d);
    console.log(opc);
         
})()