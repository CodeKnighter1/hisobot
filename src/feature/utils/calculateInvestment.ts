// utils/calculateInvestment.ts
import type { InvestmentInput, InvestmentResult } from "@/feature/types";

export function calculateInvestment({
    amount,
    currency,
    rateMin,
    rateMax,
    exchangeRate,
}: InvestmentInput): InvestmentResult {
    if (isNaN(amount) || amount <= 0) {
        throw new Error("Invalid amount");
    }

    // Convert to USD (base currency)
    const usd = currency === "UZS" ? amount / exchangeRate : amount;

    // Calculate
    const minMonthlyUSD = usd * rateMin;
    const maxMonthlyUSD = usd * rateMax;

    const minAnnualUSD = minMonthlyUSD * 12;
    const maxAnnualUSD = maxMonthlyUSD * 12;

    // Convert back
    const multiplier = currency === "UZS" ? exchangeRate : 1;

    return {
        principal: amount,
        minMonthly: minMonthlyUSD * multiplier,
        maxMonthly: maxMonthlyUSD * multiplier,
        minAnnual: minAnnualUSD * multiplier,
        maxAnnual: maxAnnualUSD * multiplier,
    };
}