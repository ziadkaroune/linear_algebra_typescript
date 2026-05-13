import {Matrix} from "../class/Matrix.ts" 


(() =>{
  
    try{
            let u = new Matrix([[4.3 , 2 ],[3 , 4]]);
            let v = new Matrix([[2 , 4] , [4.4 ,8]]);
            const scalar = 3

            let uplusv : Matrix = u.add(v);
            uplusv.printv();
            ///////////
            let usubv : Matrix = u.sub(v);
            usubv.printv();
            ////////////
            let scalU : Matrix = u.scl(scalar);
            scalU.printv();
            
    }
    catch(err){
        if(err instanceof Error)
                 console.log(err.message);
    }
})()
