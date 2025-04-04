import { createHashRouter } from 'react-router-dom';

import { HomePage, CoursesPage, PortfolioPage } from '@/pages';
import {
    HtmlPage,
    CssPage,
    JsBeginerPage,
    JsProgresPage,
    ReactProgresPage,
} from '@/pages';

import Layout from '@/layout/layout';

import {
    PAGE_HOME,
    PAGE_COURSES,
    PAGE_PORTFOLIO,
    PAGE_COURSES_HTML,
    PAGE_COURSES_CSS,
    PAGE_COURSES_JS_BEGINER,
    PAGE_COURSES_JS_PROGRES,
    PAGE_COURSES_REACT_BEGINER,
} from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_COURSES, element: <CoursesPage /> },
            { path: PAGE_COURSES_HTML, element: <HtmlPage /> },
            { path: PAGE_COURSES_CSS, element: <CssPage /> },
            { path: PAGE_COURSES_JS_BEGINER, element: <JsBeginerPage /> },
            { path: PAGE_COURSES_JS_PROGRES, element: <JsProgresPage /> },
            { path: PAGE_COURSES_REACT_BEGINER, element: <ReactProgresPage /> },

            { path: PAGE_PORTFOLIO, element: <PortfolioPage /> },
        ],
    },
];

export default createHashRouter(routes);
