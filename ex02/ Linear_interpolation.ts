/* 
Exp : 
Audio Signal Processing
    When you slide a volume fader on a mixing board or in Spotify, 
    the software doesn't just "jump" to the new volume (which would cause a "pop" sound).
    It lerps the gain over a few milliseconds to make the transition ear-friendly
*/

 //u + t * (v - u)

 

export function lerp<T>(U: T , V : T , t : number){


    if(typeof(U) !== typeof(V))
            throw new Error("type mismatch - failed operation");
    if(t > 1 || t < 0)
            throw new Error("Error t should be : 0 ≤ t ≤ 1");

   else if(typeof(U) === "number" && typeof(V) === "number" )  
            return  U + t * ( V - U ) ;
    //Object Case (Vector or Matrix) -- add more condition tto prevent error
    else{
        return (U as any).add((V as any).sub(U).scl(t)) ;
    }
}