
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
        datab = this.data.map((val) => val);
        for(let i = 0 ; i < this.size() ; i++)
               datab[i]  *=  scl;
        return new Vector(datab);
    }

    dot(v :Vector) :Vector<k>{
        this.equal_vec_size(v);
        let datab: number;
        datab = this.data.reduce(( sum , val , i) => sum + val * v.data[i] , 0 );
        return new Vector(new Array(1).fill(datab));
    }
 

}