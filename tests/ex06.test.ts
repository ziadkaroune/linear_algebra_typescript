import test from "node:test";
import assert from "assert";

import { Vector } from "../class/Vector.ts";
import { cross_product } from "../ex06/cross_product.ts";

test("cross product - basic vectors", () => {
    const u = new Vector([1, 0, 0]);
    const v = new Vector([0, 1, 0]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [0, 0, 1]);
});

test("cross product - reversed order", () => {
    const u = new Vector([0, 1, 0]);
    const v = new Vector([1, 0, 0]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [0, 0, -1]);
});

test("cross product - generic vectors", () => {
    const u = new Vector([1, 2, 3]);
    const v = new Vector([4, 5, 6]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [-3, 6, -3]);
});

test("cross product - parallel vectors", () => {
    const u = new Vector([1, 2, 3]);
    const v = new Vector([2, 4, 6]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [0, 0, 0]);
});

test("cross product - negative vectors", () => {
    const u = new Vector([-1, -2, -3]);
    const v = new Vector([4, 5, 6]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [3, -6, 3]);
});

test("cross product - zero vector", () => {
    const u = new Vector([0, 0, 0]);
    const v = new Vector([1, 2, 3]);

    const result = cross_product(u, v);

    assert.deepStrictEqual(result.data, [0, 0, 0]);
});

test("cross product - decimal vectors", () => {
    const u = new Vector([1.5, 2.5, -1]);
    const v = new Vector([3, -2, 4]);

    const result = cross_product(u, v);

    assert.ok(Math.abs(result.data[0] - 8) < 1e-9);
    assert.ok(Math.abs(result.data[1] + 9) < 1e-9);
    assert.ok(Math.abs(result.data[2] + 10.5) < 1e-9);
});

test("cross product - invalid dimension", () => {
    const u = new Vector([1, 2]);
    const v = new Vector([3, 4]);

    assert.throws(() => {
        cross_product(u, v);
    });
});

test("cross product - different invalid dimensions", () => {
    const u = new Vector([1, 2, 3]);
    const v = new Vector([4, 5, 6, 7]);

    assert.throws(() => {
        cross_product(u, v);
    });
});