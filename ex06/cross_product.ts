import { Vector } from "../class/Vector.ts";

export function cross_product(u : Vector , v : Vector) : Vector{

    if(u.size() !== 3 || v.size() !== 3)
            throw new Error("vector have to be ∈ V = R3  ");

   // I(a2 * b3 - a3 *b2 ) -  j (a1*b3 - a3*b1) + K (a1 * b2 - a2*b1)
   // vect(I , J , K);

   let i = u.data[1] * v.data[2] - u.data[2] * v.data[1];
   let j = - (u.data[0] * v.data[2] - u.data[2] * v.data[0]);
   let k = u.data[0] * v.data[1] - u.data[1] * v.data[0];

    return new Vector([i ,  j , k]);
}