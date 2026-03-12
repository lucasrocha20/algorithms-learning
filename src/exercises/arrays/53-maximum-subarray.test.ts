import { describe, expect, test } from "vitest";
import maxSubArray from "./53-maximum-subarray";


describe("Maximum subarray", () => {
    test("should return 6", () => {
        const result = maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

        expect(result).toEqual(6);
    });

    test("should return 23", () => {
        const result = maxSubArray([5,4,-1,7,8]);

        expect(result).toEqual(23);
    });
});