


class Vector<k=number>{
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

 function main(){
    try{
            let u = new Vector([1 , 2 , 8]);
            let v = new Vector([2 , 4]);
            const scl = 3;
            u.add(v);
            u.printv();
    }
    catch(err){
        if(err instanceof Error)
                 console.log(err.message);
    }
}
main();