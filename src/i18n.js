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
                    home: {
                        "title": "Welcome to the educational website",
                        "description": "This website is designed for studying multimedia technologies and developing educational web design software. Here you will find courses on HTML, CSS, JavaScript, and React to help you master modern web development tools."
                    },

                    eror:{
                        "page": "Page under development!!!",
                    },
                    navMenu: {
                        "logo": "EduWebLab",
                        "link1": "Main",
                        "link2": "Courses",
                        "link3": "Review",
                        "link4": "HTML",
                        "link5": "CSS",
                        "link6": "JS - basic",
                        "link7": "JS - advanced",
                        "link8": "React.js - basic",
                        "langItem1": "English",
                        "langItem2": "Ukrainian",
                    },
                    theme: {
                        "dark" : "Dark mode",
                        "light" : "Light mode",
                    },
                    portfolioCard: {
                        "title1": "HTML course",
                        "title2": "CSS course",
                        "title3": "JS - Basic course",
                        "title4": "JS - Advanced course",                       
                        "title5": "React.js - Basic course",

                        "subTitle1": "HTML course",
                        "subTitle2": "CSS course",
                        "subTitle3": "Basic JS course",
                        "subTitle4": "Advanced JS course",
                        "subTitle5": "Basic React.js course ",
                    },
                    buttons: {
                        "startLearning": "Start Learning",
                        "startButton": "Start Course",
                    },
                    htmlCourse: {
                        "title": "HTML Course",
                        "description": "Detailed course for beginners that will teach you the basics of page markup on the web.",
   
                        modules: {
                            "1": {
                                "title": "Intro to HTML",
                                "description": "Basic structure of a page and tags"
                            },
                            "2": {
                                "title": "Tags of headings and paragraphs",
                                "description": "h1–h6, p, br, hr"
                            },
                            "3": {
                                "title": "Lists, tables, images",
                                "description": "ul, ol, table, img, caption"
                            },
                            "4": {
                                "title": "Forms",
                                "description": "input, textarea, select, button, radio, checkbox"
                            },
                            "5": {
                                "title": "Semantic tags",
                                "description": "header, footer, article, nav, section, aside"
                            }
                        }
                    }
                },
            },
            uk: {
                translation: {
                    home: {
                        "title": "Ласкаво просимо на навчальний сайт",
                        "description": "Цей сайт створений для вивчення мультимедійних технологій та розробки вебдизайну програм навчального призначення. Ви знайдете курси з HTML, CSS, JavaScript та React, які допоможуть вам опанувати сучасні інструменти веброзробки."
                    },
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
                    buttons: {
                        "startLearning": "Почати навчання",
                        "startButton": "Почати курс",
                    },
                    htmlCourse: {
                        "title": "Курс з HTML",
                        "description": "Детальний курс для новачків, який навчить вас основам розмітки сторінок у веб.",
                        modules: {
                            "1": {
                                "title": "Вступ до HTML",
                                "description": "Базова структура сторінки та теги"
                            },
                            "2": {
                                "title": "Теги заголовків та абзаців",
                                "description": "h1–h6, p, br, hr"
                            },
                            "3": {
                                "title": "Списки, таблиці, зображення",
                                "description": "ul, ol, table, img, caption"
                            },
                            "4": {
                                "title": "Форми",
                                "description": "input, textarea, select, кнопки, radio, checkbox"
                            },
                            "5": {
                                "title": "Семантичні теги",
                                "description": "header, footer, article, nav, section, aside"
                            }
                        }
                    }
                },
            },
        },
    });

export default i18n;
