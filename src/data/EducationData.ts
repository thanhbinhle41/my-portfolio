interface IEducationData {
    name: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    description: string[];
    link?: string;
}

export const EDUCATION_DATA_EN: IEducationData[] = [
    {
        name: "Lam son gifted high school",
        fieldOfStudy: "Chemistry",
        startYear: "2016",
        endYear: "2019",
        description: [
            "GPA: 8.5/10",
            "Very good diploma",
            "President of the school's Basketball Club",
            "Class monitor for 3 years",
        ],
        link: "https://thptchuyenlamson.edu.vn/",
    },
    {
        name: "PTIT HANOI - Posts and Telecommunications Institute of Technology",
        fieldOfStudy: "Information Technology",
        startYear: "2019",
        endYear: "2024",
        description: [
            "GPA: 3.29/4.0",
            "Very good degree.",
            "Excellent Study Incentive Scholarship for the years 2020, 2021, 2023.",
            "Leader of Web team at Programming PTIT Club Ha Noi in 2023.",
        ],
        link: "https://english.ptit.edu.vn/",
    }
];

export const EDUCATION_DATA_RU: IEducationData[] = [
    {
        name: "Лицей для одаренных Лам Сон",
        fieldOfStudy: "Химия",
        startYear: "2016",
        endYear: "2019",
        description: [
            "Средний балл: 8.5/10",
            "Очень хороший диплом",
            "Президент баскетбольного клуба школы",
            "Староста класса в течение 3 лет",
        ],
        link: "https://thptchuyenlamson.edu.vn/",
    },
    {
        name: "ПТИТ ХАНОЙ - Институт почтовой и телекоммуникационной технологии",
        fieldOfStudy: "Информационные технологии",
        startYear: "2019",
        endYear: "2024",
        description: [
            "Средний балл: 3.29/4.0",
            "Очень хорошая степень.",
            "Стипендия за отличную учебу в 2020, 2021, 2023 годах.",
            "Лидер веб-команды в клубе программирования ПТИТ Ханой в 2023 году.",
        ],
        link: "https://english.ptit.edu.vn/",
    }
];