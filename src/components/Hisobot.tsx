import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LocateIcon, LocationEdit } from "lucide-react";
import icon8l from '@/images/icons8-location-48.png'
import icom8 from '@/images/icons8-location-32.png'
import icon from '@/images/icons8-instagram-48.png'
import icond from '@/images/icons8-dollar-40.png'

const Hisobot = () => {
    // Reusable data structures
    const partnershipTypes = [
        "TO'LIQ SHERIKLIK",
        "QISMAN SHERIKLIK",
        "TA'MINOTCHI"
    ];

    const investmentExamples = [
        { amount: "2. 500 $", monthly: "125 $", yearly: "1.500 $" },
        { amount: "5. 000 $", monthly: "250 $", yearly: "3.000 $" },
        { amount: "10. 000 $", monthly: "500 $", yearly: "6.000 $" },
    ];

    const socialLinks = [
        {
            title: "Ko'chma do'kon Instagrami",
            url: "https://www.instagram.com/kochma.dokon/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
        },
        {
            title: "Kontainer City Instagrami",
            url: "https://www.instagram.com/kontainer_city.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        }
    ];

    const SectionHeader = ({ children, className = "" }) => (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-serif text-center mb-6 md:mb-8 ${className}`}>
            {children}
        </h2>
    );

    const InfoCard = ({ children, className = "" }) => (
        <div className={`bg-gradient-to-r from-teal-800 to-teal-700 rounded-lg p-4 md:p-6 mb-6 shadow-lg ${className}`}>
            {children}
        </div>
    );

    const StatsCard = ({ amount, monthly, yearly }) => (
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl p-4 md:p-6 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-lg md:text-xl font-bold text-yellow-300 mb-2">{amount}</div>
            <div className="text-sm md:text-base">Oylik: <span className="font-semibold">{monthly}</span></div>
            <div className="text-sm md:text-base">Yillik: <span className="font-semibold">{yearly}</span></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-teal-900 to-slate-900">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <Card className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white shadow-2xl border-none overflow-hidden">
                    <CardHeader className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                        <div className="relative z-10 text-center py-8 md:py-16">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 bg-clip-text text-transparent">
                                HAMKORLIK TIJORAT TAKLIFI
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 mx-auto mb-6"></div>
                            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light">
                                BIRINCHI VA YAGONA KO'CHMA DO'KONLAR FABRIKASI
                            </p>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 md:space-y-12 p-6 md:p-10">
                        {/* About Section */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                BIZNING <br /> FAOLIYATIMIZ
                            </SectionHeader>
                            <div className="space-y-4 text-2xl text-center md:text-lg leading-relaxed">
                                <p>Faoliyat turi:</p>
                            </div>
                            <div className="space-y-4 text-base md:text-lg leading-relaxed">
                                <p className="text-center">
                                    Yengil konstruksiyadan iborat bo'lgan ko'chma do'kon, ofis savdo do'konlari, kapsula, konteyner, foodtruck va modul uylar ishlab chiqariladi.
                                </p>
                            </div>
                        </InfoCard>

                        {/* Goals Section */}
                        <InfoCard className="bg-gradient-to-r from-emerald-800 to-teal-700">
                            <SectionHeader className="text-yellow-300">
                                HAMKORLIK MAQSADI
                            </SectionHeader>
                            <div className="text-center space-y-6">
                                <p className="text-lg md:text-xl leading-relaxed">
                                    <span className="font-bold text-yellow-300">Viloyatlarda dillerlik sotuv ofislari va shourumlarni tashkil qilish orqali biznesni kengaytirish</span>
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-teal-600/50 rounded-lg p-4">
                                        <h3 className="font-bold text-yellow-300 mb-2">SHARTNOMA:</h3>
                                        <p>Qonuniy yoki notarius orqali rasmiylashtiriladi</p>
                                    </div>
                                    <div className="bg-teal-600/50 rounded-lg p-4">
                                        <h3 className="font-bold text-yellow-300 mb-2">SHARTNOMA MUDDATI:</h3>
                                        <p>Kelishuvga asosan 1 yildan 3 yilgacha.</p>
                                    </div>
                                </div>
                                <div className="bg-teal-600/50 rounded-lg p-4">
                                    <div>
                                        <h3 className="font-bold text-yellow-300 mb-2">SHARTNOMA NAMUNASI BILAN TANISHIB CHIQING!</h3>
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <a
                                            href="https://docs.google.com/document/d/1-mVGmjTl4YaXnPyVbsfmVsrl9P_g_fx4/edit?usp=drive_link&ouid=100764330175859332972&rtpof=true&sd=true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                                        >
                                            NAMUNA
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </InfoCard>

                        {/* Partnership Types */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                HAMKORLIK TURLARI
                            </SectionHeader>
                            <div className="grid md:grid-cols-3 gap-4">
                                {partnershipTypes.map((type, index) => (
                                    <div key={index} className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-4 text-center font-semibold hover:shadow-lg transition-shadow duration-300">
                                        <span className="text-yellow-300 font-bold">{index + 1}.</span> {type}
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        {/* <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                TO'LIQ SHERIKLIK
                            </SectionHeader>
                            <div>
                                <h1>Teng sheriklikda 50%/50% ya'ni sarmoya va daromad o'rtada(shourimni kengaytirib 12 ta viloyatda filial ochish.).</h1>
                                <h2>Bahosi 70 000$</h2>
                            </div>
                        </InfoCard> */}

                        {/* Investment Returns */}
                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                QISMAN SHERIKLIK <span className="flex text-center justify-center gap-1">DAROMADI <img src={icond} alt="" className="w-6 h-6" /></span> 
                            </SectionHeader>
                            <div className="text-center mb-8">
                                <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full font-bold text-lg md:text-xl">
                                    Oylik 5% • Yillik 60%
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {investmentExamples.map((example, index) => (
                                    <StatsCard key={index} {...example} />
                                ))}
                            </div>
                        </InfoCard>

                        {/* <InfoCard>
                            <SectionHeader>
                                TA'MINOTCHI
                            </SectionHeader>
                            <div>
                                <h1>Bizning fabrikamizga kerak bo'lgan material bilan ta'minlab berasiz va shundan sizga % beramiz. Kelishilingan holda.</h1>
                            </div>
                        </InfoCard> */}

                        {/* Social Media Links */}
                        <InfoCard className="bg-gradient-to-r from-purple-800 to-indigo-800">
                            <SectionHeader className="text-yellow-300">
                                BIZNING FAOLIYATIMIZ BILAN TANISHIB CHIQING
                            </SectionHeader>
                            <div className="text-center p-4 text-white">
                                <h3 className="font-medium text-md sm:text-lg text-left flex gap-1">IJTIMOIY TARMOQLARIMIZ. <img src={icon} alt="" className="w-7 h-7" /> </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-l from-blue-600 to-indigo-600 rounded-lg p-4 text-center font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    >
                                        <div className="text-lg md:text-base">{link.title}</div>
                                    </a>
                                ))}
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                QO'SHIMCHA
                            </SectionHeader>
                            <div className="space-y-4 text-base md:text-lg leading-relaxed">
                                <h1  className="text-center text-base">Fabrikamizga kelib ishlab chiqarayotgan mahsulotlarimizni ko'ring.</h1>
                                <h2 className=" text-base">Mahsulotimizga bozordagi bo'lgan talabni ko'ring. Ish faoliyatimiz va fabrikamizni ko'rib xulosa qilasiz.</h2>
                                <h2 className="text-base"> Biz bundan xursand bo'lamiz.</h2>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                BIZNING MANZILIMIZ
                            </SectionHeader>
                            <div>
                                <h1 className="text-base flex"> <img src={icom8} alt="" className="w-5 h-5" /> Toshkent shahar, Yangihayot tumani</h1>
                                <h2 className="text-base">Metro: Turon bekat <br /> Index bozor chorraxasi</h2>
                                <h2 className="mt-2 mb-2">Mo'ljal: Imzo zavod</h2>
                            </div>
                            <div className="rounded-lg text-center bg-emerald-600 px-4 py-3">
                                <a
                                    href="https://maps.app.goo.gl/abZn34TbaSjzdd9c6"
                                    className="text-xl text-center flex gap-2 justify-center text-yellow-300 mt-2"
                                >
                                    <img src={icon8l} alt="location" className="w-6 h-6" />
                                    Lokatsiyamiz
                                </a>
                            </div>
                        </InfoCard>

                        {/* Footer Call to Action */}
                        <div className="text-center py-8">
                            <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white rounded-2xl p-6 md:p-8 shadow-2xl">
                                <div>
                                    <h3 className="text-[20px] italic md:text-3xl mb-2">
                                        Hamkorlik uchun quyidagi raqamga bog'laning:
                                    </h3>
                                    <div className="bg-black/20 rounded-lg px-4 py-2">
                                        <a href="tel:+998950107557" className="text-[17px] md:text-4xl font-medium hover:text-yellow-700 transition-colors duration-300">
                                            📞 +99895 010 75 57
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-[20px] italic md:text-xl mt-5">
                                    Qo'shimcha savollaringiz bo'lsa telegramdan yozib qoldiring:
                                </h3>
                                <div className="bg-black/20 rounded-lg px-4 py-2">
                                    <a
                                        href="https://t.me/Hamkorlik_010"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block text-white rounded-xl px-6 font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                    >
                                        🤝 Telegram
                                    </a>
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