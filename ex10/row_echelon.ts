import { Matrix } from "../class/Matrix.ts";



(async()=>{


     let a = new Matrix(
                                [    
                                        [1., 2.],
                                        [2., 4.],
                                ])

     const arow = a.row_echelon();
     arow.printv();
})()