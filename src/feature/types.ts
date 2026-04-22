// types.ts
export type Currency = "USD" | "UZS";

export interface InvestmentInput {
  amount: number;
  currency: Currency;
  rateMin: number;
  rateMax: number;
  exchangeRate: number;
}

export interface InvestmentResult {
  principal: number;
  minMonthly: number;
  maxMonthly: number;
  minAnnual: number;
  maxAnnual: number;
}