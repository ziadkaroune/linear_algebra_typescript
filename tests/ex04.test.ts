 
import  assert   from "node:assert";
import test from "node:test"
import { Vector } from "../class/Vector.ts";

 

    
  test("vector norms examples", () => {

   
    let a = new Vector([1, 2, 3]);

    assert.strictEqual(a.norm_1(), 6);
    assert.ok(Math.abs(a.norm_2() - Math.sqrt(14)) < 1e-10);
    assert.strictEqual(a.norm_inf(), 3);


     let b = new Vector([-4, 2, -1]);

    assert.strictEqual(b.norm_1(), 7);
    assert.ok(Math.abs(b.norm_2() - Math.sqrt(21)) < 1e-10);
    assert.strictEqual(b.norm_inf(), 4);


    // [0,0,0]
    let c = new Vector([0, 0, 0]);

    assert.strictEqual(c.norm_1(), 0);
    assert.strictEqual(c.norm_2(), 0);
    assert.strictEqual(c.norm_inf(), 0);


    // [5]
    let d = new Vector([5]);

    assert.strictEqual(d.norm_1(), 5);
    assert.strictEqual(d.norm_2(), 5);
    assert.strictEqual(d.norm_inf(), 5);

});