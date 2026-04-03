export class Vector<k=number>{
    data : number[];

    constructor(data : number[]){
        this.data = [...data] ;
    }

    size() : number{
        return this.data.length ;
    }

    equal_vec_size(v : Vector<k>){
        if(v.size() != this.size())
            throw new Error("undefined size mismatch");
    }

    printv() : number[]{
        console.log(this.data);
        return this.data;
    }
    add(v : Vector<k>) : void{
        this.equal_vec_size(v);
        for(let i = 0 ; i < this.size() ; i++)
                this.data[i]  +=  v.data[i];
    }
    sub(v : Vector<k>) : void{
        this.equal_vec_size(v);
        for(let i = 0 ; i < this.size() ; i++)
                this.data[i]  -=  v.data[i];
    }
    scalar(scl :number){
        for(let i = 0 ; i < this.size() ; i++)
                this.data[i]  *=  scl;
    }
 

}