
import assert  from 'node:assert'
import test from 'node:test'
import { linear_combination } from '../ex01/linear_combination.ts';
import { Vector } from '../class/Vector.ts';



test("linear combination - canonical basis", () => {

    const e1 = new Vector([1, 0, 0]);
    const e2 = new Vector([0, 1, 0]);
    const e3 = new Vector([0, 0, 1]);

    const result = linear_combination(
        [e1, e2, e3],
        [10, -2, 0.5]
    );

    assert.deepStrictEqual(
        result.data,
        [10, -2, 0.5]
    );
});

test("linear combination - subject example", () => {

    const v1 = new Vector([1, 2, 3]);
    const v2 = new Vector([0, 10, -100]);

    const result = linear_combination(
        [v1, v2],
        [10, -2]
    );

    assert.deepStrictEqual(
        result.data,
        [10, 0, 230]
    );
});

test("linear combination - zero coefficients", () => {

    const v1 = new Vector([1, 2, 3]);
    const v2 = new Vector([4, 5, 6]);

    const result = linear_combination(
        [v1, v2],
        [0, 0]
    );

    assert.deepStrictEqual(
        result.data,
        [0, 0, 0]
    );
});

test("linear combination - negative coefficients", () => {

    const v1 = new Vector([1, 2]);
    const v2 = new Vector([3, 4]);

    const result = linear_combination(
        [v1, v2],
        [-2, 3]
    );

    assert.deepStrictEqual(
        result.data,
        [7, 8]
    );
});

test("linear combination - decimal coefficients", () => {

    const v1 = new Vector([1.5, 2]);
    const v2 = new Vector([3, -1]);

    const result = linear_combination(
        [v1, v2],
        [2.5, -0.5]
    );

    assert.ok(
        Math.abs(result.data[0] - 2.25) < 1e-9
    );

    assert.ok(
        Math.abs(result.data[1] - 5.5) < 1e-9
    );
});

test("linear combination - single vector", () => {

    const v = new Vector([5, -3, 2]);

    const result = linear_combination(
        [v],
        [4]
    );

    assert.deepStrictEqual(
        result.data,
        [20, -12, 8]
    );
});

test("linear combination - size mismatch", () => {

    const v1 = new Vector([1, 2]);
    const v2 = new Vector([3, 4]);

    assert.throws(() => {

        linear_combination(
            [v1, v2],
            [1]
        );
    });
});

test("linear combination - dimension mismatch", () => {

    const v1 = new Vector([1, 2]);
    const v2 = new Vector([3, 4, 5]);

    assert.throws(() => {

        linear_combination(
            [v1, v2],
            [1, 2]
        );
    });
});

test("linear combination - empty vectors", () => {

    assert.throws(() => {

        linear_combination([], []);
    });
});