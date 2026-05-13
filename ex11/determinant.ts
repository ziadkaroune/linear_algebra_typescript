

import { Matrix } from '../class/Matrix.ts'

(()=>{
    try{
            var a = new Matrix(
                                [    
                                       [2., 0., 0.],
                                        [0., 2., 0.],
                                        [0., 0., 2.],
                                ]
                            );

            var b = new Matrix([[8., 5., -2.],
                                [4., 7., 20.],
                                [7., 6., 1.],]);

            let c = new Matrix([
                        [ 8., 5., -2., 4.],
                        [ 4., 2.5, 20., 4.],
                        [ 8., 5., 1., 4.],
                        [28., -4., 17., 1.],
                    ]);

            const a_det = a.determinant();
            const b_det = b.determinant();
            const c_det = c.determinant();

            console.log(a_det);
            console.log(b_det);
            console.log(c_det);
     
    }
    catch(err){
        if(err instanceof Error)
                console.error(err.message);
    }
})();