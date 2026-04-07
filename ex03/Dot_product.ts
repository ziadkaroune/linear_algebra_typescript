import { Vector } from "../class/Vector.ts";

function Dot_product(){


    let a = new Vector([-1 , 6]);
    let b = new Vector([3 , 2]);

    const opa = a.dot(b);
    opa.printv();

    ///////////////////////////////

    let c = new Vector([1 , 1]);
    let d = new Vector([1 , 1]);

    const opc = c.dot(d);
    opc.printv();
         
}

Dot_product();