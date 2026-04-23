// utils/format.ts
export function formatUSD(n: number): string {
    return Math.round(n).toLocaleString("en-US") + "$";
}

export function formatUZS(n: number): string {
    const r = Math.round(n);

    if (r >= 1e12) return (r / 1e12).toFixed(2) + " trln so'm";
    if (r >= 1e9) return (r / 1e9).toFixed(2) + " mlrd so'm";
    if (r >= 1e6) return (r / 1e6).toFixed(1) + " mln so'm";

    return r.toLocaleString("uz-UZ") + " so'm";
}

export function format(n: number, currency: "USD" | "UZS") {
    return currency === "USD" ? formatUSD(n) : formatUZS(n);
}