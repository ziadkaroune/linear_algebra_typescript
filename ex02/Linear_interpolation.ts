/* 
Exp : 
Audio Signal Processing
    When you slide a volume fader on a mixing board or in Spotify, 
    the software doesn't just "jump" to the new volume (which would cause a "pop" sound).
    It lerps the gain over a few milliseconds to make the transition ear-friendly
*/

 //u + t * (v - u)

 
export function lerp<V>(u: V , v : V , t : number)  : V {

    if(typeof(u) !== typeof(v))
            throw new Error("type mismatch - failed operation");
    if(t > 1 || t < 0) 
            throw new Error("Error t should be : 0 ≤ t ≤ 1");

    if(typeof(u) === "number" )  
            return  ((u as number) + t * ((v as number) - (u as number))) as V ;
    else{
        return (u as any).add((v as any).sub(u).scl(t)) ;
    }
}