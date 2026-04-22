// hooks/useInvestmentCalculator.ts
import { useState } from "react";
import { calculateInvestment } from "../utils/calculateInvestment";
import { getExchangeRate } from "../utils/currency";
import type { Currency, InvestmentResult } from "../types";

type CalculatorInput = {
    amount: number;
    currency: Currency;
    rateMin: number;
    rateMax: number;
};

export function useInvestmentCalculator() {
    const [result, setResult] = useState<InvestmentResult | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const calculate = async (input: CalculatorInput) => {
        try {
            setLoading(true);

            const rate = await getExchangeRate();

            const res = calculateInvestment({
                ...input,
                exchangeRate: rate,
            });

            setResult(res);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { result, error, loading, calculate };
}