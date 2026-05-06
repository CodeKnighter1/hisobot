import { Card, CardHeader, CardContent } from "@/components/ui/card";
import icon8l from '@/images/icons8-location-48.png';
import icon from '@/images/icons8-instagram-48.png';
import correct from "@/images/icons8-correct-96 (3).png";
import InvestmentCalculator from "./InvestmentCalculator";
import { useTranslation } from "react-i18next";
import LanguageTabs from "./LanguageTabs";
import { Phone, Send } from "lucide-react";

const Hisobot = () => {
    const { t } = useTranslation();

    // Reusable data structures
    const activities = t("hisobot.activities", { returnObjects: true }) as string[];

    const directions = t("hisobot.directions", { returnObjects: true }) as string[];

    const advantages = t("hisobot.advantages", { returnObjects: true }) as string[];

    const faqs = t("hisobot.faqs", { returnObjects: true }) as { question: string, answer: string }[];

    const sugest = t("hisobot.sugest", { returnObjects: true }) as string[];

    const socialLinks = [
        { title: t("hisobot.social.kochma_dokon"), url: "https://www.instagram.com/kochma.dokon/" },
        { title: t("hisobot.social.kontainer_city"), url: "https://www.instagram.com/kontainer_city.uz/" }
    ];

    // Reusable components
    const SectionHeader = ({ children, className = "" }: any) => (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl tracking-wide font-serif uppercase text-center mb-4 ${className}`}>
            {children}
        </h2>
    );

    const InfoCard = ({ children, className = "" }: any) => (
        <div className={`bg-gradient-to-r from-teal-800 to-teal-700 rounded-lg p-4 md:px-6 py-6 mb-6 shadow-lg ${className}`}>
            {children}
        </div>
    );

    const ListWithIcon = ({ items, iconSize = "w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" }: any) => (
        <div className="space-y-4 sm:text-base md:text-lg lg:text-xl font-semibold tracking-wide leading-relaxed">
            {items.map((text: string, idx: number) => (
                <p key={idx} className="flex items-start gap-3">
                    <img src={correct} alt="check" className={`${iconSize} flex-shrink-0 mt-0.5`} />
                    <span>{text}</span>
                </p>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900">
            <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900">
                <LanguageTabs />
            </div>
            <div className="container mx-auto">
                <Card className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white shadow-2xl border-none overflow-hidden">
                    <CardHeader className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        <div className="relative z-10 text-center py-8 md:py-16">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                                {t("hisobot.titles.main")}
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 mx-auto"></div>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 md:space-y-12 p-6 md:p-10">
                        {/* Faoliyatimiz Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">{t("hisobot.titles.activities")}</SectionHeader>
                            <div className=" flex items-center flex-col space-y-5 text-center">
                                <h3 className="tracking-wider font-serif font-semibold text-xl text-center uppercase mt-3">{t("hisobot.titles.factory")}</h3>
                                <div className="flex flex-col items-center gap-1 text-xl font-bold">
                                    <p className="tracking-wider text-yellow-400">{t("hisobot.titles.activity_type_label")}</p>
                                    <h3>{t("hisobot.titles.activity_type_value")}</h3>
                                </div>
                            </div>
                        </InfoCard>

                        {/* Maqsad Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wide">{t("hisobot.titles.goal")}</SectionHeader>
                            <div className="text-center mb-10">
                                <p className="text-lg md:text-xl font-bold text-white tracking-wider leading-relaxed">{t("hisobot.titles.goal_desc")}</p>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wider">{t("hisobot.titles.income")}</SectionHeader>
                            <div className="text-center mt-5">
                                <div>
                                    <p className="text-xl font-bold text-white tracking-wider">{t("hisobot.titles.income_annual")}</p>
                                    <p className="text-xl font-bold text-white tracking-wider mt-4">{t("hisobot.titles.contract_term")}</p>
                                    <p className="text-xl font-bold text-white tracking-wider mt-4">{t("hisobot.titles.contract_legal")}</p>
                                </div>
                            </div>
                        </InfoCard>

                        {/* Talab va Yo'nalishlar Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wider">{t("hisobot.titles.service_republic")}</SectionHeader>
                            <div className="mt-6 space-y-8 text-white">
                                <ListWithIcon items={activities} />
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wider">{t("hisobot.titles.production_directions")}</SectionHeader>
                            <div>
                                <ListWithIcon items={directions} />
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-yellow-300 mb-4 text-center sm:text-left uppercase tracking-wider mt-8">{t("hisobot.titles.demand_high")}</h3>
                                <ListWithIcon items={advantages} iconSize="w-8 h-8" />
                            </div>
                        </InfoCard>

                        {/* ✅ KALKULYATOR Section — InvestmentCalculator import qilingan */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">{t("hisobot.titles.calculator")}</SectionHeader>
                            <p className="text-center text-white text-base md:text-lg mb-6">
                                {t("hisobot.titles.calculator_desc")}
                            </p>
                            <InvestmentCalculator />
                        </InfoCard>

                        {/* Savol-Javob Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">{t("hisobot.titles.faqs")}</SectionHeader>
                            <div className="max-w-4xl mx-auto space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="p-2">
                                        <h4 className="font-medium text-lg md:text-lg tracking-widest text-yellow-300 mb-2 flex items-start gap-2">
                                            <img src={correct} alt="q" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 mt-0.5" />
                                            <span>{faq.question}</span>
                                        </h4>
                                        <p className="text-white text-base font-medium  tracking-wide leading-relaxed px-2 md:pl-12">{faq.answer}</p>
                                        <div className="px-2 mt-2 md:pl-8">
                                            <div className="w-[310px] h-0.5 bg-yellow-500"></div>
                                        </div>
                                    </div>
                                ))}
                                {sugest.map((sugest, index) => (
                                    <div key={index} className="">
                                        {/* <img src={correct} alt="q" className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 mt-0.5" /> */}
                                        <p className="text-center text-lg font-bold text-white">{sugest}</p>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        {/* Ijtimoiy tarmoqlar Section */}
                        <InfoCard className="bg-gradient-to-r from-purple-800 to-indigo-800">
                            <SectionHeader className="text-yellow-300">{t("hisobot.titles.social_intro")}</SectionHeader>
                            <h3 className="font-medium text-md sm:text-lg flex justify-center gap-2 mb-4">{t("hisobot.titles.social_networks")} <img src={icon} alt="insta" className="w-7 h-7" /></h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-l from-blue-600 to-indigo-600 rounded-lg p-4 text-center font-semibold hover:scale-105 transition-transform">
                                        {link.title}
                                    </a>
                                ))}
                            </div>
                        </InfoCard>

                        {/* Manzil Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">{t("hisobot.titles.address_title")}</SectionHeader>
                            <div className="text-lg font-semibold space-y-1 mb-6">
                                <p>{t("hisobot.titles.address_city")}</p>
                                <p>{t("hisobot.titles.address_metro")}</p>
                                <p>{t("hisobot.titles.address_landmark")}</p>
                            </div>
                            <div className="rounded-lg text-center bg-emerald-600 px-4 py-3">
                                <a href="https://maps.app.goo.gl/SQLFe75gckdKrb4P9" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold flex gap-2 items-center justify-center text-yellow-300">
                                    <img src={icon8l} alt="loc" className="w-6 h-6" /> {t("hisobot.titles.location")}
                                </a>
                            </div>
                        </InfoCard>

                        {/* Footer Section */}
                        <div className="text-center py-8">
                            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
                                <div>
                                    <h3 className="text-xl md:text-3xl italic mb-2">{t("hisobot.titles.contact_phone")}</h3>
                                    <div className="bg-black/20 rounded-lg flex items-center justify-center gap-2 py-2">
                                        <Phone />
                                        <a href="tel:+998950107557" className="text-lg md:text-2xl font-medium">+99895 010 75 57</a>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl italic mb-2">{t("hisobot.titles.contact_telegram")}</h3>
                                    <div className="bg-black/20 rounded-lg flex items-center justify-center gap-2 py-2">
                                        <Send />
                                        <a href="https://t.me/Hamkorlik_010" className="font-bold text-lg">{t("hisobot.titles.telegram")}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Hisobot;