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
                        "lesson": 'Lesson',
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
                    },
                    cssCourse: {
                        "title": "CSS Course",
                        "description": "Step-by-step CSS course for beginners. Learn how to style websites from scratch.",
                        modules: {
                            "1": {
                                "title": "Intro to CSS",
                                "description": "How CSS works and how to connect it to HTML"
                            },
                            "2": {
                                "title": "Selectors and Properties",
                                "description": "Class, ID, element selectors and how to apply properties"
                            },
                            "3": {
                                "title": "Colors, Units and Text Styling",
                                "description": "color, font-size, px, %, em, rem"
                            },
                            "4": {
                                "title": "Box Model and Layout",
                                "description": "margin, padding, border, display"
                            },
                            "5": {
                                "title": "Positioning and Flexbox",
                                "description": "relative, absolute, fixed, flexbox basics"
                            }
                        }
                    },
                    jsBeginerCourse: {
                        "title": "JavaScript Course",
                        "description": "Basic JavaScript course for beginners. Learn how to add interactivity to your websites.",
                        modules: {
                            "1": {
                                "title": "Intro to JavaScript",
                                "description": "What is JS and where it's used"
                            },
                            "2": {
                                "title": "Variables and Data Types",
                                "description": "var, let, const, strings, numbers, booleans"
                            },
                            "3": {
                                "title": "Operators and Conditions",
                                "description": "if, else, comparison and logical operators"
                            },
                            "4": {
                                "title": "Loops",
                                "description": "for, while, do...while"
                            },
                            "5": {
                                "title": "Functions",
                                "description": "Function declaration and usage"
                            }
                        }
                    },

                    jsAdvancedCourse: {
                        "title": "Advanced JavaScript Course",
                        "description": "Deepen your understanding of JavaScript with concepts like closures, async programming, and ES6+ features.",
                        modules: {
                            "1": {
                                "title": "Closures and Scope",
                                "description": "How lexical scope and closures work in JS"
                            },
                            "2": {
                                "title": "Asynchronous JavaScript",
                                "description": "Callbacks, Promises, and async/await"
                            },
                            "3": {
                                "title": "Object-Oriented Programming",
                                "description": "Constructor functions, classes, and inheritance"
                            },
                            "4": {
                                "title": "Modules and Tooling",
                                "description": "import/export, bundlers, transpilers"
                            },
                            "5": {
                                "title": "Error Handling and Debugging",
                                "description": "try...catch, error types, debugging tools"
                            }
                        }
                    },
                    reactCourse: {
                        "title": "React.js Course",
                        "description": "A beginner-friendly introduction to React. Learn how to build modern interactive UIs using components and hooks.",
                        modules: {
                            "1": {
                                "title": "Intro to React",
                                "description": "What is React and why it's used"
                            },
                            "2": {
                                "title": "JSX and Rendering",
                                "description": "JSX syntax and rendering elements"
                            },
                            "3": {
                                "title": "Components",
                                "description": "Functional components and props"
                            },
                            "4": {
                                "title": "State and Events",
                                "description": "Using useState and handling events"
                            },
                            "5": {
                                "title": "useEffect Hook",
                                "description": "Side effects and lifecycle with useEffect"
                            }
                        }
                    },
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
                        "lesson": 'Урок',
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
                    },
                    "cssCourse": {
                        "title": "Курс CSS",
                        "description": "Покроковий курс CSS для початківців. Навчіться стилізувати сайти з нуля.",
                        "modules": {
                        "1": {
                            "title": "Вступ до CSS",
                            "description": "Як працює CSS та як підключити його до HTML"
                        },
                        "2": {
                            "title": "Селектори та властивості",
                            "description": "Селектори класів, ID, елементів і застосування властивостей"
                        },
                        "3": {
                            "title": "Кольори, одиниці виміру та стилізація тексту",
                            "description": "color, font-size, px, %, em, rem"
                        },
                        "4": {
                            "title": "Блочна модель та розмітка",
                            "description": "margin, padding, border, display"
                        },
                        "5": {
                            "title": "Позиціонування та Flexbox",
                            "description": "relative, absolute, fixed, основи flexbox"
                        }
                        }
                    },
                    "jsBeginerCourse": {
                        "title": "Курс JavaScript",
                        "description": "Базовий курс JavaScript для початківців. Дізнайтесь, як додати інтерактивність до ваших сайтів.",
                        "modules": {
                        "1": {
                            "title": "Вступ до JavaScript",
                            "description": "Що таке JS і де він використовується"
                        },
                        "2": {
                            "title": "Змінні та типи даних",
                            "description": "var, let, const, рядки, числа, булеві значення"
                        },
                        "3": {
                            "title": "Оператори та умови",
                            "description": "if, else, оператори порівняння та логічні оператори"
                        },
                        "4": {
                            "title": "Цикли",
                            "description": "for, while, do...while"
                        },
                        "5": {
                            "title": "Функції",
                            "description": "Оголошення функцій та їх використання"
                        }
                        }
                    },
                    "jsAdvancedCourse": {
                        "title": "Розширений курс JavaScript",
                        "description": "Поглибте свої знання JavaScript, вивчивши замикання, асинхронне програмування та функції ES6+.",
                        "modules": {
                        "1": {
                            "title": "Замикання та область видимості",
                            "description": "Як працює лексична область видимості та замикання в JS"
                        },
                        "2": {
                            "title": "Асинхронний JavaScript",
                            "description": "Callbacks, Promises, та async/await"
                        },
                        "3": {
                            "title": "Об'єктно-орієнтоване програмування",
                            "description": "Конструктори, класи та наслідування"
                        },
                        "4": {
                            "title": "Модулі та інструменти",
                            "description": "import/export, збирачі, транспілери"
                        },
                        "5": {
                            "title": "Обробка помилок та відлагодження",
                            "description": "try...catch, типи помилок, інструменти для відлагодження"
                        }
                        }
                    },
                    "reactCourse": {
                        "title": "Курс React.js",
                        "description": "Зрозумілий курс React для початківців. Дізнайтесь, як створювати сучасні інтерактивні інтерфейси з використанням компонентів та хуків.",
                        "modules": {
                        "1": {
                            "title": "Вступ до React",
                            "description": "Що таке React і навіщо він потрібен"
                        },
                        "2": {
                            "title": "JSX і рендеринг",
                            "description": "Синтаксис JSX та рендеринг елементів"
                        },
                        "3": {
                            "title": "Компоненти",
                            "description": "Функціональні компоненти та пропси"
                        },
                        "4": {
                            "title": "Стан та події",
                            "description": "Використання useState та обробка подій"
                        },
                        "5": {
                            "title": "Хук useEffect",
                            "description": "Побічні ефекти та життєвий цикл з useEffect"
                        }
                        }
                    }
                },
            },
        },
    });

export default i18n;
