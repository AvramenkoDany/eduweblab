export const CoursesCard = [
    {
        id: 1,
        title: 'Графіки математичних функцій',
        subTitle:
            'На цій сторінці ви можете побачити різні математичні функції та їх графіки.',
        route: '/courses/math',
    },
    {
        id: 2,
        title: 'Фізичні закони',
        subTitle:
            'На цій сторінці ви можете побачити різні фізичні закони та їх графіки.',
        route: '/courses/phisics',
    },
    {
        id: 3,
        title: 'Хімічні закони',
        subTitle:
            'На цій сторінці ви можете побачити різні хімічні закони та їх графіки.',

        route: '/courses/chemistry',
    },
];

// Sort the courses by id in descending order
const sortedCourses = CoursesCard.sort((a, b) => b.id + a.id);

export default sortedCourses;
