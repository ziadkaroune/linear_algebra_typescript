
import { Vector } from "./Vector.ts";

import {
    determinant_n_two ,
    determinant_n_three ,
    determinant_n_four } from  '../utlils/determinant_utils.ts'

type MatrixSize = {
    rows: number;
    columns: number;
};


export class Matrix<T=number> {
    data : number[][];
    rows: number;
    columns: number;


    constructor( data : number[][]) {
        this.data = data.map((row) => [...row]);
        this.rows = data.length;               // rows  -> vertical  -> dimension Y
        this.columns = this.data[0].length;   // columns -> horizontal -> dimension X
    }

    size() : MatrixSize {
        return {rows : this.rows , columns : this.columns}
    }

    equal_matrix_size(mat : Matrix<T>){
        let vec_size = mat.size();
        let _this_size = this.size();
        if(vec_size.rows != _this_size.rows || vec_size.columns != _this_size.columns)
            throw new Error("undefined size mismatch");
    }

    square_matrix(){
          if(this.columns !== this.rows)
                throw new Error("matrix is not square -  undefined");
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

  
    mul_vec(v : Vector) : Vector {
        //A ∈ Rm×n, B ∈ Rn×p and u ∈ Rn   check vect size  is columns matrix
        if(v.size() !==  this.columns   )
            throw  new Error(" u must be ∈ Rn where (m,n,p) ∈ N3");
        const  vivo  =   this.data.map((vec)=>{
            return vec.reduce((sum , vico , i) => sum + vico * v.data[i],0 );
        })
            return new Vector(vivo);
    }


    mul_mat(mat : Matrix) : Matrix {

        if(this.columns !== mat.rows)
                    throw new Error("Invalid matrix multiplication");
 
        let matrixAb = Array.from(({length : this.columns}) , ()=> new Array(mat.rows).fill(0));

            for(let x = 0 ; x < this.rows ; x++){
                for(let y = 0 ; y < mat.columns ;y++ ){
                    for(let k = 0 ; k < this.columns ; k++)
                             matrixAb[x][y] += this.data[x][k] * mat.data[k][y];
                }
            }
            return new Matrix(matrixAb);
    }


    trace() : number {

        let trace : number = 0;
            if(this.rows !== this.columns)
                    throw new Error("Invalid , trace for matrix with n x n");

             for(let x = 0 ; x < this.rows ; x++){
                for(let y = 0 ; y < this.columns ;y++ ){
                     if(y === x){
                        trace += this.data[x][y];
                        break;
                     }
                }
            }

        return trace;
    }


    transpose() : Matrix {

        let transpose_arr : number[][] = Array.from(({length : this.rows}) , ()=>
        new Array(this.columns).fill(0));

        for(let x = 0 ; x < this.rows ; x++) {
                for(let y = 0 ; y < this.columns ;y++ )
                        transpose_arr[y][x] = this.data[x][y];
        }
        return new Matrix(transpose_arr);
    }


    row_echelon() : Matrix{

    let lead = 0;
    let reow_elchon_matrix : number [][];
    reow_elchon_matrix = this.data.map((row) => [...row])
    for (let r = 0; r < this.rows; r++) {
        if (lead >= this.columns) break;

        let i = r;
        // Trouver pivot
        while (reow_elchon_matrix[i][lead] === 0) {
            i++;
            if (i === this.rows) {
                i = r;
                lead++;
                if (lead === this.columns)  return new Matrix(reow_elchon_matrix);
            }
        }

        // Swap
        [reow_elchon_matrix[i], reow_elchon_matrix[r]] = [reow_elchon_matrix[r], reow_elchon_matrix[i]];

        // Normaliser
        let val = reow_elchon_matrix[r][lead];
        for (let j = 0; j < this.columns; j++) {
            reow_elchon_matrix[r][j] /= val;
        }

        // Éliminer les autres lignes
        for (let i2 = 0; i2 < this.rows; i2++) {
            if (i2 !== r) {
                let factor = reow_elchon_matrix[i2][lead];
                for (let j = 0; j < this.columns; j++) {
                    reow_elchon_matrix[i2][j] -= factor * reow_elchon_matrix[r][j];
                }
            }
        }

        lead++;
    }
        return new Matrix(reow_elchon_matrix);
    }


    determinant() : number{

        let determinant :number = 0;
        let dim :number = this.columns; // dimension - in case columns === rows

        this.square_matrix();

         if(dim === 2)
            determinant = determinant_n_two(this.data);
        else if (dim === 3) 
            determinant = determinant_n_three(this.data);
        else if(dim === 4)
            determinant = determinant_n_four(this.data);
        else
            throw new Error("limited dimension for 4 demesions max -  undefined");
        return determinant  ;

    }

    inverse() : number[][]{
 
        this.square_matrix(); // check if is it a square matrix
        if(this.determinant() === 0)
                throw new Error("Error - The matrice is singular");
        else{
                    //logic here
        }
        return this.data;
    }

    rank() : number{
  
    // 1. On récupère la matrice sous forme échelonnée
    const reducedMatrix = this.row_echelon();
    let count = 0;

    // 2. On compte les lignes qui ne sont pas totalement composées de zéros
    for (let r = 0; r < reducedMatrix.rows; r++) {
        let isRowZero = true;
        for (let c = 0; c < reducedMatrix.columns; c++) {
            // Utilisation d'une petite tolérance pour les nombres flottants
            if (Math.abs(reducedMatrix.data[r][c]) > 1e-10) {
                isRowZero = false;
                break;
            }
        }
        if (!isRowZero) {
            count++;
        }
    }

    return count;
    }

}
