
import { Vector } from "../class/Vector.ts";

export function linear_combination(vect : Vector[] , coefs :number[]):Vector{
    
    let vec_size = vect[0].size();
    const vectresult =  new Array(vec_size).fill(0);

    if(vect.length !== coefs.length)
            throw new Error("undefined - size mismatch");

     for (let i = 1; i < vect.length; i++) {
        if (vect[i].size() !== vec_size)
            throw new Error("undefined - vectors dimensions mismatch");
    }

    for(let  i = 0 ; i < vect.length  ;  i++){
        for(let j = 0 ; j < vec_size ; j++)
                 vectresult[j] +=  vect[i].data[j] * coefs[i];
   }
    return new Vector(vectresult);

}