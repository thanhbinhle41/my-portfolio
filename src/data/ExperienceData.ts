interface IExperienceData {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    link?: string;
}


export const EXPERIENCE_DATA: IExperienceData[] = [
    {
        title: "Intern front end developer",
        company: "Elcom Technology Communications Corporation (ELCOM CORP)",
        location: "Hanoi, Vietnam",
        startDate: "Dec 2021",
        endDate: "Mar 2022",
        description: [
            "Learning and training with the framework VueJS.",
            "Testing and developing a demo website with ongoing Search Engine Optimization (SEO) enhancements.",
            "Implemented new features and fixed bugs to enhance the user experience."
        ],
        link: "https://www.elcom.com.vn/",
    },
    {
        title: "Mid-level web developer",
        company: "Maxflow technology Inc",
        location: "Hanoi, Vietnam",
        startDate: "May 2022",
        endDate: "Present",
        description: [
            "Develop and maintain web applications across both frontend and backend.",
            "Optimize source code and application performance for efficiency and scalability.",
            "Collaborate with cross-functional teams to design, develop, and deploy new features and enhancements.",
            "Utilize Webpack for bundling components and implement Micro Frontend architecture to facilitate seamless communication among users, components, and applications within the workflow.",
            "Contribute to company culture by participating in planning and coordinating internal activities and events.",
        ],
        link: "https://maxflowtech.com/",
    }
];