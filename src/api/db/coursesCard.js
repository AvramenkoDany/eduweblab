
export const CoursesCard = [
    {
        id: 1,
        title: "Графіки математичних функцій",
        subTitle: "На цій сторінці ви можете побачити різні математичні функції та їх графіки.",
        route: '/courses/math',
    }
];

// Sort the courses by id in descending order
export const sortedCourses = CoursesCard.sort((a, b) => b.id - a.id);

export default sortedCourses;
