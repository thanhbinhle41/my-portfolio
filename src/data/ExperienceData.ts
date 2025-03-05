interface IExperienceData {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    link?: string;
}


export const EXPERIENCE_DATA_EN: IExperienceData[] = [
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
        company: "Maxflow Technology Inc",
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

export const EXPERIENCE_DATA_RU: IExperienceData[] = [
    {
        title: "Стажер фронтенд разработчик",
        company: "Elcom Technology Communications Corporation (ELCOM CORP)",
        location: "Ханой, Вьетнам",
        startDate: "Дек 2021",
        endDate: "Мар 2022",
        description: [
            "Изучение и обучение с использованием фреймворка VueJS.",
            "Тестирование и разработка демонстрационного веб-сайта с постоянными улучшениями поисковой оптимизации (SEO).",
            "Реализация новых функций и исправление ошибок для улучшения пользовательского опыта."
        ],
        link: "https://www.elcom.com.vn/",
    },
    {
        title: "Веб-разработчик среднего уровня",
        company: "Maxflow Technology Inc",
        location: "Ханой, Вьетнам",
        startDate: "Май 2022",
        endDate: "Настоящее время",
        description: [
            "Разработка и поддержка веб-приложений как на фронтенде, так и на бэкенде.",
            "Оптимизация исходного кода и производительности приложений для повышения эффективности и масштабируемости.",
            "Сотрудничество с межфункциональными командами для проектирования, разработки и развертывания новых функций и улучшений.",
            "Использование Webpack для сборки компонентов и внедрение архитектуры Micro Frontend для обеспечения бесшовной коммуникации между пользователями, компонентами и приложениями в рамках рабочего процесса.",
            "Вклад в корпоративную культуру путем участия в планировании и координации внутренних мероприятий и событий."
        ],
        link: "https://maxflowtech.com/",
    }
];