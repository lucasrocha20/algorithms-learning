import { describe, expect, test } from "vitest";
import maxProfit from "./121-best-time-to-buy-and-sell-stock";

describe("Best time to buy and sell stock", () => {
    test("should return 5", () => {
        const result = maxProfit([7,1,5,3,6,4]);

        expect(result).toEqual(5);
    });

        test("should return 0", () => {
        const result = maxProfit([7,6,4,3,1]);

        expect(result).toEqual(0);
    });
});