import { createHashRouter } from 'react-router-dom';

import { HomePage, CoursesPage, PortfolioPage, MathPage } from '@/pages';

import Layout from '@/layout/layout';

import {
    PAGE_HOME,
    PAGE_COURSES,
    PAGE_PORTFOLIO,
    PAGE_COURSES_HTML,
} from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_COURSES, element: <CoursesPage /> },
            { path: PAGE_COURSES_HTML, element: <MathPage /> },

            { path: PAGE_PORTFOLIO, element: <PortfolioPage /> },
        ],
    },
];

export default createHashRouter(routes);
