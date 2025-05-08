import { createHashRouter } from 'react-router-dom';

import {
    HomePage,
    CoursesPage,
    PortfolioPage,
    MathPage,
    PhisicsPage,
    ChemistryPage,
} from '@/pages';

import Layout from '@/layout/layout';

import {
    PAGE_HOME,
    PAGE_COURSES,
    PAGE_PORTFOLIO,
    PAGE_COURSES_MATH,
    PAGE_COURSES_PHISICS,
    PAGE_COURSES_CHEMISTRY,
} from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_COURSES, element: <CoursesPage /> },
            { path: PAGE_COURSES_MATH, element: <MathPage /> },
            { path: PAGE_COURSES_PHISICS, element: <PhisicsPage /> },
            { path: PAGE_COURSES_CHEMISTRY, element: <ChemistryPage /> },

            { path: PAGE_PORTFOLIO, element: <PortfolioPage /> },
        ],
    },
];

export default createHashRouter(routes);
