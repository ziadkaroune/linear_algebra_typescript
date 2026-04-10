

import {Matrix} from '../class/Matrix.ts'

(()=>{
    try{
            var a = new Matrix(
                                [[3., -5. , 9],
                                 [6., 8. , 2],
                                 [6., 8. , 2]]
                            );

            var b = new Matrix([[ 2, 1],
                                [ 4, 2]]);

            const transpose = a.transpose();
            transpose.printv();
     
    }
    catch(err){
        if(err instanceof Error)
                console.error(err.message);
    }
})();