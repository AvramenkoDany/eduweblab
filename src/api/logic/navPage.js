import i18next from '@/i18n';

export const navPage = [
    {
        id: 1,
        title: i18next.t('navMenu.link1'),
        route: '/',
    },
    {
        id: 2,
        title: i18next.t('navMenu.link2'),
        route: '/courses',
        children: [
            { id: 21, title: i18next.t('navMenu.link4'), route: '/courses/html' },
            { id: 22, title: i18next.t('navMenu.link5'), route: '/courses/css' },
            { id: 23, title: i18next.t('navMenu.link6'), route: '/courses/js-beginer' },
            { id: 24, title: i18next.t('navMenu.link7'), route: '/courses/js-progres' },
            { id: 25, title: i18next.t('navMenu.link8'), route: '/courses/react-beginer' },
        ]
    },
    {
        id: 3,
        title: i18next.t('navMenu.link3'),
        route: '/portfolio',
    },
];

export default navPage;
