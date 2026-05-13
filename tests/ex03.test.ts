import assert  from 'node:assert'
import test from 'node:test'
import { Vector } from '../class/Vector.ts';


test("dot negative numbers" , ()=>{
    let a = new Vector([-5 , 2]);
    let b = new Vector([4 , 3]);

    const result = a.dot(b);
    assert.strictEqual(result , -14);
})

test("dot with zeros", () => {
    const a = new Vector([0, 0, 0]);
    const b = new Vector([1, 2, 3]);

    assert.strictEqual(a.dot(b), 0);
});

test("dot orthogonal vectors", () => {
    const a = new Vector([1, 0]);
    const b = new Vector([0, 1]);

    assert.strictEqual(a.dot(b), 0);
});

test("dot same vectors", () => {
    const a = new Vector([2, 3, 4]);

    assert.strictEqual(a.dot(a), 29);
});


test("mismatch size" , ()=>{
    let a = new Vector([-5 , 2 ,  5]);
    let b = new Vector([4 , 3]);

        assert.throws(()=>{
             a.dot(b);
        });
})
