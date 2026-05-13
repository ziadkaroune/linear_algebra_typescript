import { Vector } from "../class/Vector.ts";


export function angle_cos(u : Vector , v :Vector) : number{
  
    if( u.norm_2() === 0 ||  v.norm_2() === 0)
            throw new Error("dominateur 0 - invalid")
    u.equal_vec_size(v);
    return  u.dot(v) / ( u.norm_2() * v.norm_2());
}