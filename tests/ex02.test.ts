import { AssertionError } from 'node:assert/strict'
import assert  from 'node:assert'
import test from 'node:test'
import { Matrix } from '../class/Matrix.ts';
import { lerp } from '../ex02/Linear_interpolation.ts';
import { Vector } from '../class/Vector.ts';



test('lerp between two numbers', () => {
    const result = lerp(2, 10, 0.5);
    assert.strictEqual(result, 6);
});

test('lerp between vectors', () => {
    const v1 = new Vector([2, 1]);
    const v2 = new Vector([4, 2]);

    const midv = lerp(v1, v2, 0.5);

    assert.deepStrictEqual(midv.data, [3, 1.5]);
});

test('lerp between matrices', () => {
    const m1 = new Matrix([
        [2, 1],
        [3, 4]
    ]);

    const m2 = new Matrix([
        [20, 10],
        [30, 40]
    ]);

    const midm = lerp(m1, m2, 0.5);

    assert.deepStrictEqual(midm.data, [
        [11, 5.5],
        [16.5, 22]
    ]);
});

test('lerp with t = 0 returns first value', () => {
    const result = lerp(5, 15, 0);

    assert.strictEqual(result, 5);
});

test('lerp with t = 1 returns second value', () => {
    const result = lerp(5, 15, 1);

    assert.strictEqual(result, 15);
});

test('lerp vector with t = 0', () => {
    const v1 = new Vector([1, 2]);
    const v2 = new Vector([10, 20]);

    const result = lerp(v1, v2, 0);

    assert.deepStrictEqual(result.data, [1, 2]);
});

test('lerp vector with t = 1', () => {
    const v1 = new Vector([1, 2]);
    const v2 = new Vector([10, 20]);

    const result = lerp(v1, v2, 1);

    assert.deepStrictEqual(result.data, [10, 20]);
});

test('throws when types mismatch', () => {
    const v = new Vector([1, 2]);

    assert.throws(() => {
        lerp(10 as any, v as any, 0.5);
    });
});

test('throws when t > 1', () => {
    assert.throws(() => {
        lerp(0, 10, 2);
    });
});

test('throws when t < 0', () => {
    assert.throws(() => {
        lerp(0, 10, -1);
    });
});