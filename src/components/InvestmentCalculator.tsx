import { useState } from "react";
import { useInvestmentCalculator } from "@/feature/hooks/useInvestmentCalculator";
import { format } from "@/feature/utils/format";
import type { Currency } from "@/feature/types";

export default function InvestmentCalculator() {
    const [currency, setCurrency] = useState<Currency>("USD");
    const [amount, setAmount] = useState("");

    const { result, error, loading, calculate } = useInvestmentCalculator();

    const handleCalculate = () => {
        calculate({
            amount: parseFloat(amount.replace(/\./g, "")),
            currency,
            rateMin: 0.0375,
            rateMax: 0.045,
        });
    };

    const handleCurrencySwitch = (c: Currency) => {
        setCurrency(c);
        setAmount("");
    };
    const formatNumber = (value: string) => {
        const onlyNums = value.replace(/\D/g, ""); // faqat raqamlar
        return onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, "."); // 10000 -> 10.000
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">

            {/* 🔘 Currency Tabs */}
            <div className="flex justify-center">
                <div className="flex rounded-xl overflow-hidden border border-teal-500">
                    <button
                        onClick={() => handleCurrencySwitch("USD")}
                        className={`px-6 py-2 font-semibold transition cursor-pointer ${currency === "USD"
                            ? "bg-yellow-400 text-white"
                            : "text-teal-300 hover:bg-teal-800"
                            }`}
                    >
                        USD (valyuta)
                    </button>

                    <button
                        onClick={() => handleCurrencySwitch("UZS")}
                        className={`px-8 py-2 font-semibold border-l border-teal-500 transition cursor-pointer ${currency === "UZS"
                            ? "bg-teal-500 text-white"
                            : "text-teal-300 hover:bg-teal-800"
                            }`}
                    >
                        UZS (so'm)
                    </button>
                </div>
            </div>

            {/* 💰 Input */}
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="text"
                    inputMode="numeric"
                    placeholder={
                        currency === "USD" ? "Masalan: 5000" : "Masalan: 65 000 000"
                    }
                    value={amount}
                    onChange={(e) => setAmount(formatNumber(e.target.value))}
                    className="flex-1 bg-teal-900 border border-teal-500 rounded-lg px-4 py-3 text-white placeholder:text-teal-500 focus:ring-2 focus:ring-yellow-400 outline-none"
                />

                <button
                    onClick={handleCalculate}
                    disabled={loading}
                    className="bg-yellow-400 text-teal-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 active:scale-95 transition disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Hisoblanmoqda..." : "Hisoblash"}
                </button>
            </div>

            {/* ❌ Error */}
            {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* 📊 Result Cards */}
            {result && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                    {/* Principal */}
                    <div className="bg-teal-900/60 p-4 rounded-xl text-center">
                        <p className="text-teal-400 text-xs">Kiritilgan mablag'</p>
                        <p className="text-white font-semibold text-lg">
                            {format(result.principal, currency)}
                        </p>
                    </div>

                    {/* Monthly */}
                    <div className="bg-yellow-400/10 border border-yellow-400/40 p-4 rounded-xl text-center">
                        <p className="text-yellow-300 text-xs">Oylik foyda</p>
                        <p className="text-yellow-300 font-bold text-lg">
                            {format(result.minMonthly, currency)} –{" "}
                            {format(result.maxMonthly, currency)}
                        </p>
                    </div>

                    {/* Annual */}
                    <div className="bg-yellow-400/10 border border-yellow-400/40 p-4 rounded-xl text-center">
                        <p className="text-yellow-300 text-xs">Yillik foyda</p>
                        <p className="text-yellow-300 font-bold text-lg">
                            {format(result.minAnnual, currency)} –{" "}
                            {format(result.maxAnnual, currency)}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}