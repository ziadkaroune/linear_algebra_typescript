//matrix = [
//  [a, b, c],  <-- row 0
//  [d, e, f],  <-- row 1
//
//matrix.length   // 2 rows
//matrix[0].length // 3 columns
//
import { Vector } from "./Vector.ts";

type MatrixSize = {
    rows: number;
    columns: number;
};

export class Matrix<T=number>{
    data : number[][];
    rows: number;
    columns: number;


    constructor( data : number[][]){
        this.data = data.map((row) => [...row]);
        this.rows = data.length;             // rows  -> vertical  -> dimension Y
        this.columns = this.data[0].length;   // columns -> horizontal -> dimension X
    }
    size() : MatrixSize{
        return {rows : this.rows , columns : this.columns}
    }
      equal_matrix_size(mat : Matrix<T>){
        let vec_size = mat.size();
        let _this_size = this.size();
        if(vec_size.rows != _this_size.rows || vec_size.columns != _this_size.columns)
            throw new Error("undefined size mismatch");
    }

    printv() : void{
        console.log(this.data?.map(row => `[${row.join(', ')}]`).join('\n'));  
    }
    add(mat : Matrix<T>) : Matrix<T>{
          let datab: number[][];
        datab = this.data.map((row) => [...row]);
        this.equal_matrix_size(mat);
        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  +=  mat.data[x][y];
        }
        return new Matrix(datab);

    }
    sub(mat : Matrix<T>) :  Matrix<T>{
        let datab: number[][];
        datab = this.data.map((row) => [...row]);
        this.equal_matrix_size(mat);
          for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                    datab[x][y]  -=  mat.data[x][y];
        }
        return new Matrix(datab);

    }
    scl(scalar :number) :  Matrix<T>{
         let datab: number[][];
        datab = this.data.map((row) => [...row]);
       for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.columns ; y++)
                     datab[x][y]    *=  scalar;
        }
          return new Matrix(datab);
    }


    // Let A ∈ Rm×n, B ∈ Rn×p and u ∈ Rn where (m,n,p) ∈ N3 

    mul_vec(v : Vector) : Vector {
        //A ∈ Rm×n, B ∈ Rn×p and u ∈ Rn   check vect size  is columns matrix
        if(v.size() !==  this.columns   )
            throw  new Error(" u must be ∈ Rn where (m,n,p) ∈ N3");
        const  vivo  =   this.data.map((vec)=>{
            return vec.reduce((sum , vico , i) => sum + vico * v.data[i],0 );
        })
            return new Vector(vivo);
    }


      

    mul_mat(mat : Matrix) : Matrix{

              //A (2×3):          B (3×2):
            //| 1  2  3 |       | 7  8  |
            //| 4  5  6 |       | 9  10 |
            //          //       | 11 12 |

            //C[0][0] = (1×7) + (2×9)  + (3×11) = 7 + 18 + 33  = 58
            //C[0][1] = (1×8) + (2×10) + (3×12) = 8 + 20 + 36  = 64
            //C[1][0] = (4×7) + (5×9)  + (6×11) = 28 + 45 + 66 = 139
            //C[1][1] = (4×8) + (5×10) + (6×12) = 32 + 50 + 72 = 154

            //Result (2×2):
            //| 58   64  |
            //| 139  154 |
    
        
        if(this.columns !== mat.rows)
                    throw new Error("Invalid matrix multiplication");
        
        //If A is (m × n) and B is (n × p), the result C is (m × p)

        // size of the new matrix m x p   |  columns A x row B

        let matrixAb = Array.from(({length : this.columns}) , ()=> new Array(mat.rows).fill(0));

            for(let x = 0 ; x < this.rows ; x++){
                for(let y = 0 ; y < mat.columns ;y++ ){
                    for(let k = 0 ; k < this.columns ; k++)
                        matrixAb[x][y] += this.data[x][k] * mat.data[k][y];
                    
                }
            }
            return new Matrix(matrixAb);
        }
}