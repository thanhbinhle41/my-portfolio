interface IProjectData {
    name: string;
    projDescription: string;
    company: string;
    startDate: string;
    endDate: string;
    position: string;
    technologies: string[];
    description: string[];
    images?: string[];
    video?: string;
    link?: string;
}

export const PROJECT_DATA: IProjectData[] = [
    {
        name: "1SK - Smart fitness and healthcare platform",
        projDescription: "A platform that provides a personalized fitness and healthcare experience for users.",
        company: "ELCOM CORP",
        startDate: "Dec 2021",
        endDate: "Mar 2022",
        position: "Front-end Developer",
        technologies: ["NuxtJs", "VueJs"],
        description: [
            "Developed a CMS website with features including featured articles, user notification creation, and automated notification delivery on the 1SK website and application.",
            "Resolved UI issues for the e-commerce website of the 1SK project, ensuring a seamless and user-friendly experience",
        ],
        images: [],
        link: "https://1sk.vn/",
    },
    {
        name: "PastePin ",
        projDescription: "Personal project developed under the guidance of a mentor. The website enables code management and storage across multiple programming languages while facilitating secure sharing among internal users within the company.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "May 2022",
        endDate: "July 2022",
        position: "Full-stack Developer",
        technologies: ["Flask", "SQLAlchemy", "jQuery"],
        description: [
            "Developed the website UI using Bootstrap and jQuery",
            "Designed system architecture and databases",
            "Built RESTful APIs using Flask.",
        ],
        images: [],
    },
    {
        name: "MineOpt - Mining Optimization",
        projDescription: "A website enabling the construction of 3D simulation models and the computation of real-world scenarios related to material transportation in mines and construction sites.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "July 2022",
        endDate: "Dec 2022",
        position: "Front-end Developer",
        technologies: ["jQuery", "ReactJS", "Typescript"],
        description: [
            "Developed the website UI and integrated APIs to implement specific functionalities using Bootstrap and jQuery.",
            "Migrated the front-end project to a new architecture using ReactJS and TypeScript, enhancing performance and maintainability",
        ],
        images: [],
    },
    {
        name: "Maxflow App",
        projDescription: "Maxflow.app is a web-based platform for process automation, enabling users to connect simple components to create workflows that execute flexible and complex tasks.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Dec 2023",
        endDate: "June 2023",
        position: "Front-end Developer",
        technologies: ["ReactJS", "Webpack", "MicroFront-end"],
        description: [
            "Designed and maintained components and configuration settings for each element in the 'User Interface' flow",
            "Continuously learned and adopted new technologies and techniques, such as Webpack and Micro Frontend, to enhance and optimize existing systems.",
            "Utilized Webpack to bundle components and deploy them to the server for efficient asset management and performance optimization.",
            "Implemented Webpack and Micro Frontend technology to facilitate communication between users, components, and Maxflow.app, seamlessly integrating them into user workflows.",
        ],
        images: [],
        link: "https://maxflow.app/",
    },
    {
        name: "ACE 3 - Analytics Crowdsourcing Environment Version 3",
        projDescription: "An application for data visualization, analysis, and prediction or identification of exceptions based on data analysis through algorithms.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Apr 2023",
        endDate: "Nov 2024",
        position: "Full-stack Developer",
        technologies: ["ReactJS", "TypeScript", "Flask", "Fast API"],
        description: [
            "Developed project modules as independent functions and components, then integrated them into the main application for seamless functionality.",
            "Analyzed requirements and processed data streams to ensure efficient data handling and system performance.",
            "Optimize application speed and performance.",
            "Developed RESTful APIs using Python FastAPI for efficient and scalable backend services.",
            "Developed the website UI using ReactJS and TypeScript, ensuring a responsive and maintainable interface.",
        ],
        images: [],
    },
    {
        name: "Book ecosystem - Final year project",
        projDescription: "Developed a book ecosystem application featuring an e-book and audiobook store with direct and online purchasing, a library for reading and listening, and an administrative book management system. Integrated a Recommendation System to provide personalized book suggestions for users.",
        company: "PTIT HANOI - POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY HANOI",
        startDate: "Aug 2023",
        endDate: "Dec 2023",
        position: "Full-stack Mobile Developer",
        technologies: ["React Native", "NestJS", "Postgresql", "Python"],
        description: [
            "Developed the mobile application UI using React Native, ensuring a seamless and user-friendly experience.",
            "Designed and developed RESTful APIs using NestJS for efficient and scalable backend services.",
            "Developed the database schema and implemented data storage using PostgreSQL.",
            "Integrated a Recommendation System to provide personalized book suggestions for users.",
        ],
        images: [],
    },
    {
        name: "MaxGPT - Enterprise Workflow Automation with Gen AI",
        projDescription: "Developed automated workflows as AI assistant tools to enhance enterprise operations. Enabled staff to utilize AI for daily tasks while continuously refining workflows based on usage insights. Captured operational data to optimize processes and trained AI to autonomously manage workflows, improving efficiency and scalability.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Oct 2024",
        endDate: "Present",
        position: "Full-stack Developer",
        technologies: ["ReactJS", "Python", "Gen AI"],
        description: [
            "Developed and maintained the front-end application using ReactJS, ensuring a responsive and user-friendly interface.",
            "Optimize system performance and scalability to support continuous workflow automation.",
            "Build essential and widely-used AI tools tailored to enterprise demands.",
        ],
        video: "maxgpt.mp4",
        link: "https://maxflow.ai/",

    }

]  