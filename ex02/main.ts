import {lerp} from './ Linear_interpolation.ts'
import { Vector } from '../class/Vector.ts';
import {Matrix} from '../class/Matrix.ts'

function main(){
    try{
            let v1 =  new Vector([2 , 1]);
            let v2 =  new Vector([4 , 2]);

            let m1 = new Matrix([[2., 1.], [3., 4.]]);
            let m2 = new Matrix([[20.,10.], [30., 40.]]);


            const midv = lerp(v1, v2, 0.3);
            midv.printv();
            console.log("----------------------------");
            const midm = lerp(m1 , m2 , 0.5);
            midm.printv();
    }
    catch(err){
              if(err instanceof Error)
                 console.log(err.message);
    }
}

main();