//matrix = [
//  [a, b, c],  <-- row 0
//  [d, e, f],  <-- row 1
//
//matrix.length   // 2 rows
//matrix[0].length // 3 columns
//

type MatrixSize = {
    rows: number;
    colums: number;
};

export class Matrix<T=number>{
    public readonly data : number[][];
    public readonly rows: number;
    public readonly colums: number;


    constructor( data : number[][]){
        this.data = data.map((row) => [...row]);
        this.rows = data.length;             // rows  -> vertical  -> dimension Y
        this.colums = this.data[0].length;   // columns -> horizontal -> dimension X
    }
    size() : MatrixSize{
        return {rows : this.rows , colums : this.colums}
    }
      equal_matrix_size(v : Matrix<T>){
        let vec_size = v.size();
        let _this_size = this.size();
        if(vec_size.rows != _this_size.rows || vec_size.colums != _this_size.colums)
            throw new Error("undefined size mismatch");
    }

    printv( a : Matrix<T> ) : void{
        console.log(a.data?.map(row => `[${row.join(', ')}]`).join('\n'));  
    }
    add(v : Matrix<T>) : Matrix<T>{
          let datab: number[][];
        datab = this.data.map((row) => [...row]);
        this.equal_matrix_size(v);
        for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.colums ; y++)
                    datab[x][y]  +=  v.data[x][y];
        }
        return new Matrix(datab);

    }
    sub(v : Matrix<T>) :  Matrix<T>{
        let datab: number[][];
        datab = this.data.map((row) => [...row]);
        this.equal_matrix_size(v);
          for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.colums ; y++)
                    datab[x][y]  -=  v.data[x][y];
        }
        return new Matrix(datab);

    }
    scl(scalar :number) :  Matrix<T>{
         let datab: number[][];
        datab = this.data.map((row) => [...row]);
       for(let x = 0 ; x < this.rows ; x++){
             for(let y = 0 ; y < this.colums ; y++)
                     datab[x][y]    *=  scalar;
        }
          return new Matrix(datab);
    }

}