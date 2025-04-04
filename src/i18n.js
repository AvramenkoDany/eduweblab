import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        lng: Cookies.get("language") || "en",
        fallbackLng: ["en", "uk", "ru",],
        detection: { order: ["cookie"], cache: ["cookie"] },
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    navMenu: {
                        "logo": "EduWebLab",
                        "link1": "Main",
                        "link2": "Coursec",
                        "link3": "Відгуки",
                        "link4": "HTML",
                        "link5": "CSS",
                        "link6": "JS - basic",
                        "link7": "JS - продвинутий",
                        "link8": "React.js - основи",
                        "langItem1": "English",
                        "langItem2": "Українська",
                    },
                    theme: {
                        "dark" : "Dark mode",
                        "light" : "Light mode",
                    },
                    portfolioCard: {
                        "title1": "HTML курс",
                        "title2": "CSS курс",
                        "title3": "JS - курс по основам",
                        "title4": "JS - продвинутий курс",                       
                        "title5": "React.js - курс по основам",

                        "subTitle1": "Курс по HTML",
                        "subTitle2": "Курс по CSS",
                        "subTitle3": "Курс по JS - базовий",
                        "subTitle4": "Курс по JS - продвинутий",
                        "subTitle5": "Курс по React.js - базовий",
                    },
 
                },
            },
            uk: {
                translation: {
                    eror:{
                        "page": "Сторінка в розробці!!!",
                    },
                    navMenu: {
                        "logo": "EduWebLab",
                        "link1": "Головна",
                        "link2": "Курси",
                        "link3": "Відгуки",
                        "link4": "HTML",
                        "link5": "CSS",
                        "link6": "JS - основи",
                        "link7": "JS - продвинутий",
                        "link8": "React.js - основи",
                        "langItem1": "English",
                        "langItem2": "Українська",
                    },
                    theme: {
                        "dark" : "Темний режим",
                        "light" : "Світлий режим",
                    },
                    coursesCard: {
                        "title1": "HTML курс",
                        "title2": "CSS курс",
                        "title3": "JS - курс по основам",
                        "title4": "JS - продвинутий курс",                       
                        "title5": "React.js - курс по основам",

                        "subTitle1": "Курс по HTML",
                        "subTitle2": "Курс по CSS",
                        "subTitle3": "Курс по JS - базовий",
                        "subTitle4": "Курс по JS - продвинутий",
                        "subTitle5": "Курс по React.js - базовий",
                    },
                },
            },
        },
    });

export default i18n;
