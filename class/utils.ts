
import { Matrix } from "./Matrix.ts";

function determinant_split(coltoremove :  number , mat : number[][]) :Matrix {
          const submatrix = mat.slice(1).map(row => row.filter((_ , colindex) => colindex !== coltoremove ));
          return new Matrix(submatrix)  ;
    }

export function determinant_n_two(mat : number[][]){
    return ( mat[0][0] * mat[1][1] ) - ( mat[0][1] * mat[1][0] );
}

export function determinant_n_three(mat : number[][]){
    let determinant = 0;
            for(let i  =  0 ;  i < 3 ; i++){
                const sign :number = (i % 2 === 0) ? 1 : -1;
                const submatrix = determinant_split(i ,  mat);
                determinant += sign * mat[0][i] * determinant_n_two(submatrix.data);
            }
            return determinant;
        }

export function determinant_n_four(mat : number[][]){
    let determinant = 0;
            for(let i  =  0 ;  i < 4 ; i++){
                const sign :number = (i % 2 === 0) ? 1 : -1;
                const submatrix = determinant_split(i ,  mat);
                determinant += sign * mat[0][i] * determinant_n_three(submatrix.data);
            }
            return determinant;
        }