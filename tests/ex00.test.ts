import { Matrix } from '../class/Matrix.ts'
import test from 'node:test';
import assert from 'node:assert';


       test('u + v' , ()=>{
            let u = new Matrix([[3,7],[3 , 4]]);
            let v = new Matrix([[7 , 4] , [-2 ,2]]);
            const k = u.add(v);
          assert.deepStrictEqual(k.data , [[10, 11] ,[1, 6]]);
       })
        test('u - v' , ()=>{
            let u = new Matrix([[3,7],[3 , 4]]);
            let v = new Matrix([[7 , 4] , [-2 ,2]]);
            const k = u.sub(v);
          assert.deepStrictEqual(k.data , [[ -4, 3 ], [ 5, 2 ]]);
       })

       test('0 - v', () => {
            const u = new Matrix([
                [0,0],
                [0,0]
            ]);
            const v = new Matrix([
                [1,2],
                [3,4]
            ]);
            const k = u.sub(v);
            assert.deepStrictEqual(k.data,[[-1,-2],[-3,-4]]);
    });


    //      test('u - v' , ()=>{
    //         assert.throws(()=>{
    //                 let u = new Matrix([[3,7],[3 , 4]]);
    //                 let v = new Matrix([[7 , 4] , [-2]]);
    //                 const k = u.sub(v);
    //         })
    //    })
         test('u scalar  5' , ()=>{
            let u = new Matrix([[3,7],[3 , 4]]);
            const k = u.scl(5);
          assert.deepStrictEqual(k.data , [[ 15, 35 ], [ 15, 20 ]]);
       })
         test('u scalar 0' , ()=>{
            let u = new Matrix([[3,7],[3 , 4]]);
            const k = u.scl(0);
          assert.deepStrictEqual(k.data , [[ 0, 0 ], [ 0, 0 ]]);
       })
       test('u scalar -2' , ()=>{
            let u = new Matrix([[1,-2],[-3,4]]);
            const k = u.scl(-2);
            assert.deepStrictEqual(k.data , [[-2,4],[6,-8]]);
        })
 