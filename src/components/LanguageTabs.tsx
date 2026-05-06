import { useTranslation } from "react-i18next"

const tabs = [
    { code: "uz", label: "O'zbekcha" },
    { code: "ru", label: "Ўзбекча" }
]

export default function LanguageTabs() {
    const { i18n } = useTranslation()

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-center pt-4 pb-0">
            <div className="inline-flex gap-0 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 rounded-xl p-1">
                {tabs.map((tab) => {
                    const active = i18n.language === tab.code

                    return (
                        <button
                            key={tab.code}
                            onClick={() => changeLanguage(tab.code)}
                            className={`
                                px-7 py-2.5 rounded-lg border-none cursor-pointer
                                text-sm sm:text-base font-semibold font-serif tracking-wide
                                transition-all duration-200
                                ${active
                                    ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 shadow-md shadow-yellow-600/30"
                                    : "bg-transparent text-white/60 hover:bg-white/10 hover:text-white/90"
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}