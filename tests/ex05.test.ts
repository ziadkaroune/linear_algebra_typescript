import test from "node:test";
import assert from "assert";

import { Vector } from "../class/Vector.ts";
import { angle_cos } from "../ex05/angle_cos.ts";

test("angle cosine - same vectors", () => {
    const a = new Vector([3, 4]);
    const b = new Vector([3, 4]);

    assert.ok(
        Math.abs(angle_cos(a, b) - 1) < 1e-9
    );
});

test("angle cosine - orthogonal vectors", () => {
    const a = new Vector([1, 0, 0]);
    const b = new Vector([0, 1, 0]);

    assert.ok(
        Math.abs(angle_cos(a, b)) < 1e-9
    );
});

test("angle cosine - opposite vectors", () => {
    const a = new Vector([2, -1]);
    const b = new Vector([-2, 1]);

    assert.ok(
        Math.abs(angle_cos(a, b) + 1) < 1e-9
    );
});

test("angle cosine - proportional vectors", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([2, 4, 6]);

    assert.ok(
        Math.abs(angle_cos(a, b) - 1) < 1e-9
    );
});

test("angle cosine - negative proportional vectors", () => {
    const a = new Vector([1, 2, 3]);
    const b = new Vector([-1, -2, -3]);

    assert.ok(
        Math.abs(angle_cos(a, b) + 1) < 1e-9
    );
});



test("angle cosine - generic vectors", () => {
    const a = new Vector([5, 1, -2]);
    const b = new Vector([2, 7, 1]);

    const result = angle_cos(a, b);

    assert.ok(
        Math.abs(result - 0.3726779962) < 1e-9
    );
});

test("angle cosine - single dimension", () => {
    const a = new Vector([5]);
    const b = new Vector([-10]);

    assert.ok(
        Math.abs(angle_cos(a, b) + 1) < 1e-9
    );
});

test("angle cosine - zero vector", () => {
    const a = new Vector([0, 0]);
    const b = new Vector([1, 2]);

    assert.throws(() => {
        angle_cos(a, b);
    });
});

test("angle cosine - size mismatch", () => {
    const a = new Vector([1, 2]);
    const b = new Vector([1, 2, 3]);

    assert.throws(() => {
        angle_cos(a, b);
    });
});