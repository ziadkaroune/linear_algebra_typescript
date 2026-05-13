
export class Vector<k=number> {

    data : number[];

    constructor(data : number[]){
        this.data = [...data] ;
    }

    size() : number{
        return this.data.length ;
    }

    equal_vec_size(v : Vector<k>){
        if(v.size() !== this.size())
            throw new Error("size mismatch - operation failed");
    }

    printv() : void{
       console.log(this.data?.map(row => `[${row}]`).join('\n')); 
    }

    add(v : Vector<k>) : Vector<k>{
        this.equal_vec_size(v);
        let datab: number[];
        datab = this.data.map((val) => val);
        this.equal_vec_size(v);
        for(let i = 0 ; i < this.size() ; i++)
                datab[i]  +=  v.data[i];
        return new Vector(datab);
    }
    sub(v : Vector<k>) : Vector<k>{
        this.equal_vec_size(v);
        let datab: number[];
        datab = this.data.map((val) => val);
        this.equal_vec_size(v);
        for(let i = 0 ; i < this.size() ; i++)
                datab[i]  -=  v.data[i];
        return new Vector(datab);
    }
    scl(scl :number) : Vector<k>{
        let datab: number[];
        datab = this.data.map((val) => val * scl);
        return new Vector(datab);
    }

    dot(v :Vector<k>) : number{
        this.equal_vec_size(v);
        return this.data.reduce(( sum , val , i) => sum + val * v.data[i] , 0 );
    }
    
    // Taxicab norm or Manhattan norm
    norm_1() : number{
        return this.data.reduce((sum , val) => sum + Math.abs(val),0);
    }
    //Euclidean norm
    norm_2() : number{
         return  Math.sqrt(this.data.reduce((sum , val) =>sum + Math.pow(val , 2),0));
    }
    // supremum norm
    norm_inf() : number{
        return     Math.max(...this.data.map(val => Math.abs(val)));
    }
 
 
}