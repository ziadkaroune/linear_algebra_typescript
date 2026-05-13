import { Matrix } from "../class/Matrix.ts";
import { Vector } from "../class/Vector.ts";
import test  from 'node:test'
import assert from "node:assert";


test('matrix x matrix' , ()=>{
         var a = new Matrix(
                                    [[3., -5.],
                                     [6., 8.]]
                                );
    
                var b = new Matrix([[ 2, 1],
                                    [ 4, 2]]); 
 
      
                const mul_mat = a.mul_mat(b);   
    assert.deepStrictEqual(mul_mat.data , [[ -14, -7 ], [ 44, 22 ]]);
})
test('matrix x Vector' , ()=>{
         var a = new Matrix(
                                    [[3., -5.],
                                     [6., 8.]]
                                );
    
    
                let v = new Vector([4., 2.]);
 
      
                const mul_vec  = a.mul_vec(v);
        assert.deepStrictEqual(mul_vec.data , [ 2, 40 ]);
})