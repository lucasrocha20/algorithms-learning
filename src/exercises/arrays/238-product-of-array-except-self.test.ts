import { describe, expect, test } from "vitest";
import productExceptSelf from "./238-product-of-array-except-self";

describe("Product of array except self", () => {
    test("should return [24,12,8,6]", () => {
        const result = productExceptSelf([1,2,3,4]);

        expect(result).toEqual([24,12,8,6]);
    });

    test("should return [0,0,9,0,0]", () => {
        const result = productExceptSelf([-1,1,0,-3,3]);

        expect(result).toEqual([0,0,9,0,0]);
    });
});