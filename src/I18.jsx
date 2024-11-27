import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-http-backend";
import Language from "i18next-browser-languagedetector"
import uzL from "../public/Locales/{}uz.json"
import ruL from "../public/Locales/{}ru.json"
import engL from "../public/Locales/{}eng.json"

i18n
.use(backend)
.use(Language)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:'uz',
    debug:true,
    resources:{
        uz:{translation:uzL},
        ru:{translation:ruL},
        eng:{translation:engL}
    }
})
export default i18n