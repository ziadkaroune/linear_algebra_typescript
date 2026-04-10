

import {Matrix} from '../class/Matrix.ts'
import { Vector } from '../class/Vector.ts';

(()=>{
    try{
            var a = new Matrix(
                                [[3., -5.],
                                 [6., 8.]]
                            );

            var b = new Matrix([[ 2, 1],
                                [ 4, 2]]);

            let v = new Vector([4., 2.]);


            console.log("--------B x v ---------")
            const mul_vec = b.mul_vec(v);
            mul_vec.printv();

             console.log("-------- A x B --------")
            const mul_mat = a.mul_mat(b);
            mul_mat.printv();
    }
    catch(err){
        if(err instanceof Error)
                console.error(err);
    }
})();