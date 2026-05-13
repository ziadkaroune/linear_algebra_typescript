import { cross_product } from "./cross_product.ts";
import { Vector } from "../class/Vector.ts";

function main(){
    try{

    var a =  new Vector([0., 0., 1.]);
    var b = new Vector([1., 0., 0]);
    const c = cross_product(a , b);
    c.printv();
     //////////////////////////////////
    console.log("-----------------------------")


      var e = new Vector([1., 2., 3.]);
      var f = new Vector([4., 5., 6.]);
      const g = cross_product(e , f);
      g.printv();

    //////////////////////////////////
    console.log("-----------------------------")
    var x =  new Vector([4., 2., -3.]);
    var y = new Vector([-2., -5., 16.]);
    const z = cross_product(x , y);
      z.printv();

    }
    catch(err){
        if(err instanceof Error)
            console.error(err.message);
    }
}

main();