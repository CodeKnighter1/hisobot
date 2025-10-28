import { Card, CardHeader, CardContent } from "@/components/ui/card";
import icon8l from '@/images/icons8-location-48.png'
import icom8 from '@/images/icons8-location-32.png'
import icon from '@/images/icons8-instagram-48.png'
import correct from "@/images/icons8-correct-96 (3).png"
// import hisobot_i1 from "@/images/just/image copy 2.png"
// import hisobot_i2 from "@/images/just/image copy 3.png"
// import hisobot_i3 from "@/images/just/image copy 4.png"
// import hisobot_i4 from "@/images/just/image copy.png"
// import hisobot_i5 from "@/images/just/image.png"
// import hisobot_i6 from "@/images/just/photo_2025-10-28_17-51-10.jpg"
// import hisobot_i7 from "@/images/just/photo_2025-10-28_17-51-31.jpg"
// import hisobot_i8 from "@/images/just/photo_2025-10-28_17-51-37.jpg"

const Hisobot = () => {
    // Reusable data structures
    const partnerships = [
        {
            title: "Qisman sheriklik:",
            desc: "Kiritilingan mablag'ingizdan har oy 5% dan ya'ni yillik 60% sof foydangiz bo'ladi. Siz qisman sherik bo'lganligingiz uchun forsmajor holatlari bundan mustasno. Shartnoma MchJ yoki notarius orqali kelishilingan holda 1 yil muddatga tuziladi. Foydangizni plastik karta yoki naqd orqali to'laqonli olishingiz mumkin."
        },
        {
            title: "To'liq sheriklik:",
            desc: "Ishlash tartibimiz 50% / 50% bo'ladi. Bir xil sarmoya kiritib daromadini bir xil olamiz. Shartnoma muddati kelishilingan holda 1 yildan 3 yilgacha. Risk - formajor ham teng o'rtada bo'ladi."
        },
        {
            title: "Ta'minotchi:",
            desc: "Bizning fabrikamizga kerakli bo'lgan mahsulotlar bilan taminlab turasiz va kelishilingan holda sizga foiz(%) ajratamiz."
        },
        {
            title: "Dillerlik",
            desc: "Har bir 12 viloyatda shourum ochiladi maqsad usha yerdagi mijozlarga yaqinlik tug'dirish, mahsulotlarimizni tezroq yetkazish. Shartnoma qonuniy kelishilingan holda rasmiylashtiriladi."
        }
    ];

    const faqs = [
        {
            question: "Hamkorlik qilib qancha daromad qilish mumkin?",
            answer: "Hamkorlik qilib oyiga 5% dan, yiliga esa 40% dan 60% gacha daromad qilishingiz mumkin!"
        },
        {
            question: "Hamkorlik shartnomasi qanday tuziladi?",
            answer: "Hamkorlikimiz qonuniy shartnoma asosida yoki natarius orqali boʻladi."
        },
        {
            question: "Kiritilgan sarmoyadan foydani qancha vaqtda olish mumkin bo'ladi?",
            answer: "Eng asosiysi kiritilgan sarmoyangizdan foydangizni har oy olasiz."
        },
        {
            question: "Agar kiritilgan mablagni qaytarib olishmoqchi bo'lsa tartibi qanday bo'ladi?",
            answer: "Kelishuvga asosan bir oy oldin ogohlantirib quyiladi va 30 ish kunida puliningizni qaytib olishiz mumkin."
        },
        {
            question: "Foyda zarar qanday bo'ladi?",
            answer: "Biz ishlab chiqarayotgan mahsulotimizni qarzga yoki nasiya savdoga sotmaganimiz naqd pulga sotganligimiz sabab va mahsulotlarimizni muddati o'tadigan mahsulotlar bo'lmagani uchun ham zarar ko'rish holatimiz kuzatilmaydi va hozirki kunda bozorda bizning mahsulotimiz birinchilardan bo'lganligi uchun talab yuqori, shuning uchun biznesimizni kengaytirish maqsadida hamkorlik qilmoqchimiz."
        },
        {
            question: "Hamkorlik qilish uchun nima qilish kerak?",
            answer: "Hamkorlik qilish uchun bizning ofisimizga va fabrikamizga keling va ishlab chiqarishimizni mahsulotimizga bozordagi talabni ko'ring va bir qarorga kelasiz va undan keyin xulosa qilsangiz bo'ladi."
        }
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

    // const pictures = [
    //     { name: hisobot_i1 },
    //     { name: hisobot_i2 },
    //     { name: hisobot_i3 },
    //     { name: hisobot_i4 },
    //     { name: hisobot_i5 },
    //     { name: hisobot_i6 },
    //     { name: hisobot_i7 },
    //     { name: hisobot_i8 }
    // ]


    const SectionHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
        <h2 className={`text-2xl md:text-3xl lg:text-4xl tracking-wide font-serif text-center mb-6 md:mb-8 ${className}`}>
            {children}
        </h2>
    );

    const InfoCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
        <div className={`bg-gradient-to-r from-teal-800 to-teal-700 rounded-lg p-4 md:p-6 mb-6 shadow-lg ${className}`}>
            {children}
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
                                HAMKORLIK  TIJORAT TAKLIFI
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-emerald-400 mx-auto"></div>
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
                                    Yengil konstruksiyadan iborat. <br />  Ko'chma do'kon - savdo va xizmat ko'rsatish shahobchalari - kiyoskalar - kapsula do'kon - konteyner - foodtruck va modul uylar - ishlab chiqarish.
                                </p>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wider">
                                MAHSULOTLARIMIZGA BO'LGAN TALAB
                            </SectionHeader>

                            <div className="mt-6 space-y-5 text-white">
                                {/* Talab punktlari */}
                                <div className="space-y-4 sm:text-base md:text-lg lg:text-xl leading-relaxed">
                                    <p className="flex items-start gap-3">
                                        <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Biz O'zbekistonda birinchi va yagona fabrika bo'lganligimiz uchun hozirgi kunda bizga talab yuqori.
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 mt-0.5" />
                                        <span>
                                            Butun O'zbekiston bo'ylab bizning mahsulotlarimiz har bitta viloyat va tumanlarda mavjud.
                                        </span>
                                    </p>
                                    <p className="flex items-start gap-3">
                                        <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0 mt-0.5" />
                                        <span>
                                            12 ta viloyatda va Toshkent shahrida bizning mahsulotlarimiz 50 dan ortiq hodim va 10 ga yaqin mutahasislarimiz 100 dan ortiq mahsulotlarni ishlab chiqarmoqda.
                                        </span>
                                    </p>
                                </div>

                                {/* Nega biz? */}
                                <div className="mt-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 mb-4 text-center sm:text-left">
                                        Nega aynan biz?
                                    </h3>
                                    <div className="space-y-3 sm:text-base md:text-lg lg:text-xl leading-relaxed">
                                        <p className="flex items-center gap-3">
                                            <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0" />
                                            Qurilish tezligi
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0" />
                                            Arzonroq xarajat
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0" />
                                            Mustahkamlik va chidamlilik
                                        </p>
                                        <p className="flex items-center gap-3">
                                            <img src={correct} alt="icon for increase" className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0" />
                                            Ko'chirish va kengaytirish imkoniyati
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                FOYDA VA ZARAR
                            </SectionHeader>
                            <div>
                                <p>Mahsulotlarimizni nasiyaga bermaslik va muddati o'tmasligi sababli faoliyatni zarar ko'rish xafi yo'q. Sababi oldindan buyurtmalarimiz mavjud.</p>
                            </div>
                        </InfoCard>

                        {/* Goals Section */}
                        <InfoCard className="bg-gradient-to-r from-emerald-800 to-teal-700">
                            <SectionHeader className="text-yellow-300 tracking-wide">
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
                                        <h3 className="text-yellow-300 italic mb-2">Shartnoma namunasi bilan tanishib chiqish uchun pastdagi " NAMUNA " tugmasini bosing </h3>
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
                            <SectionHeader className="text-yellow-300 tracking-wide">
                                HAMKORLIK TURLARI
                            </SectionHeader>
                            <div className="grid md:grid-cols-3 gap-4">
                                {partnerships.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group"
                                    >
                                        {/* Title */}
                                        <h3 className="text-2xl sm:text-3xl tracking-wide font-bold text-amber-600 transition-colors text-start mb-6">
                                            {item.title}
                                        </h3>

                                        {/* Description — uzun matn uchun */}
                                        <p className="text-base sm:text-lg text-white leading-relaxed text-left max-w-3xl mx-auto">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>


                        <InfoCard>
                            <SectionHeader className="text-yellow-300">
                                QO'SHIMCHA
                            </SectionHeader>
                            <div className="space-y-4 text-base md:text-lg leading-relaxed">
                                <h1 className="text-center text-base">Fabrikamizga kelib ishlab chiqarayotgan mahsulotlarimizni ko'ring.</h1>
                                <h2 className=" text-base">Mahsulotimizga bozordagi bo'lgan talabni ko'ring. Ish faoliyatimiz va fabrikamizni ko'rib xulosa qilasiz.</h2>
                                <h2 className="text-base"> Biz bundan xursand bo'lamiz.</h2>
                            </div>
                        </InfoCard>

                        <InfoCard>
                            <SectionHeader className="text-yellow-300 tracking-wide">
                                SAVOL - JAVOBLAR
                            </SectionHeader>

                            <div className="mt-6">
                                <p className="text-center text-white mb-8 font-medium">
                                    Barcha savollaringizga shu tugmani bosish orqali javob topishingiz mumkin
                                </p>

                                {/* Yagona dizayn — barcha ekranlar uchun */}
                                <div className="max-w-4xl mx-auto">
                                    <div className="space-y-2">
                                        {faqs.map((faq, index) => (
                                            <div
                                                key={index}
                                                className="p-2"
                                            >
                                                {/* Savol */}
                                                <h4 className="font-bold text-base md:text-lg text-white mb-2 flex items-start gap-2">
                                                    <span className="w-7 h-7 sm:w-8 sm:h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-amber-700">Savol:</span>
                                                    <span className="font-medium">{faq.question}</span>
                                                </h4>

                                                {/* Javob */}
                                                <p className="text-white text-base leading-relaxed pl-9 sm:pl-10">
                                                    <span className="font-semibold text-amber-600">Javob:</span> {faq.answer}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Oxirgi xabar */}
                                <p className="mt-10 text-center text-lg font-bold text-yellow-300 italic">
                                    Sizga foydamizdan ulish beramiz. Bu degani halol biznes.
                                </p>
                            </div>
                        </InfoCard>

                        {/* Social Media Links */}
                        <InfoCard className="tracking-wide bg-gradient-to-r from-purple-800 to-indigo-800">
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
                                    className="text-xl text-center flex gap-1 items-center justify-center text-yellow-300 mt-2"
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