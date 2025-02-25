interface IEducationData {
    name: string;
    fieldOfStudy: string;
    startYear: string;
    endYear: string;
    description: string[];
}

export const EDUCATION_DATA: IEducationData[] = [
    {
        name: "Lam son gifted high school",
        fieldOfStudy: "Chemistry",
        startYear: "2016",
        endYear: "2019",
        description: [
            "GPA: 8.5/10",
            "Very good diploma",
        ]
    },
    {
        name: "PTIT HANOI - Posts and Telecommunications Institute of Technology",
        fieldOfStudy: "Information Technology",
        startYear: "2019",
        endYear: "2024",
        description: [
            "GPA: 3.29/4.0",
            "Very good degree.",
            "Excellent Study Incentive Scholarship for the years 2020, 2021. 2023.",
        ]
    }
];