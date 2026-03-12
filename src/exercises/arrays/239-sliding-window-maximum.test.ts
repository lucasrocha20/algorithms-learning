import { describe, expect, test } from "vitest";
import maxSlidingWindow from "./239-sliding-window-maximum";

describe("Sliding window maximum", () => {
    test("should return [3,3,5,5,6,7]", () => {
        const result = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);

        expect(result).toEqual([3,3,5,5,6,7]);
    });
});