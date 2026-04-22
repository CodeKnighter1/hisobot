// __tests__/calculateInvestment.test.ts
import { calculateInvestment } from "../utils/calculateInvestment";

describe("calculateInvestment", () => {
    it("calculates correctly for USD", () => {
        const result = calculateInvestment({
            amount: 1000,
            currency: "USD",
            rateMin: 0.0375,
            rateMax: 0.045,
            exchangeRate: 12800,
        });

        expect(result.minMonthly).toBeCloseTo(37.5);
        expect(result.maxMonthly).toBeCloseTo(45);
    });

    it("throws on invalid input", () => {
        expect(() =>
            calculateInvestment({
                amount: -100,
                currency: "USD",
                rateMin: 0.03,
                rateMax: 0.04,
                exchangeRate: 12800,
            })
        ).toThrow();
    });
});