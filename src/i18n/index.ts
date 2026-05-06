import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";

import uz from "./locales/uz.json";
import ru from "./locales/ru.json";

i18n                   // JSON fayllarni yuklash uchun
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            ru: { translation: ru },
        },
        fallbackLng: "uz",
        supportedLngs: ["uz", "ru"],
        // Tilni aniqlash sozlamalari
        detection: {
            order: ["localStorage", "navigator"],     // birinchi localStorage ni tekshiradi
            caches: ["localStorage"],                 // tilni localStorage ga saqlaydi
            lookupLocalStorage: "i18nextLng",         // localStorage da shu nom bilan saqlanadi
        },
        interpolation: {
            escapeValue: false,
        },
        lng: "uz",
    });

export default i18n;