import i18next from '@/i18n';

export const navPage = [
    {
        id: 1,
        title: () => i18next.t('navMenu.link1'), // Используйте функцию
        route: '/',
    },
    {
        id: 2,
        title: () => i18next.t('navMenu.link2'),
        route: '/courses',
        children: [
            { id: 21, title: () => i18next.t('navMenu.link4'), route: '/courses/math' },
        ]
    },
    {
        id: 3,
        title: () => i18next.t('navMenu.link3'),
        route: '/portfolio',
    },
];

export default navPage;