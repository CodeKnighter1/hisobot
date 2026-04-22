// utils/currency.ts
export async function getExchangeRate(): Promise<number> {
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();

    return data.rates.UZS;
}