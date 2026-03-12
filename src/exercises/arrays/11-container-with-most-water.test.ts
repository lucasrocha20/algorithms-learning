import { describe, expect, test } from "vitest";

import maxArea from './11-container-with-most-water';

describe("Container with most water", () => {
    test("should return 49", () => {
        const result = maxArea([1,8,6,2,5,4,8,3,7]);

        expect(result).toEqual(49);
    });

    test("should return 1", () => {
        const result = maxArea([1,1]);

        expect(result).toEqual(1);
    });
});