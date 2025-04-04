import i18next from '@/i18n';

export const CoursesCard = [
    {
        id: 5,
        title: i18next.t('coursesCard.title5'),
        subTitle: i18next.t('coursesCard.subTitle5')
    },
    {
        id: 4,
        title: i18next.t('coursesCard.title4'),
        subTitle: i18next.t('coursesCard.subTitle4')
    },
    {
        id: 3,
        title: i18next.t('coursesCard.title3'),
        subTitle: i18next.t('coursesCard.subTitle3')
    },
    {
        id: 2,
        title: i18next.t('coursesCard.title2'),
        subTitle: i18next.t('coursesCard.subTitle2')
    },
    {
        id: 1,
        title: i18next.t('coursesCard.title1'),
        subTitle: i18next.t('coursesCard.subTitle1')
    }
];

// Sort the courses by id in descending order
export const sortedCourses = CoursesCard.sort((a, b) => b.id - a.id);

export default sortedCourses;
