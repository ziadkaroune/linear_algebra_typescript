
import { Vector } from "../class/Vector.ts";


export function linear_combination(vect : Vector[] , scalar :number[]){
    
    let vectresult = new Vector(new Array(vect.length).fill(0));

    if(vect.length !== scalar.length)
            throw new Error("undifined - size mismatch");

    else{

            for(var i = 0 ; i < vect.length ; i++){

                for(var y = 0 ;  y < vect[i].data.length ; y++)
                    vect[i].data[y] *= scalar[i];
                
            }

            for(var i = 1 ; i < vect.length ; i++)
                    vectresult.add(vect[i]);
                
            vectresult.printv();
    }

}