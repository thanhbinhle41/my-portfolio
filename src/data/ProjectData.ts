import mineOpt1 from './images/MineOpt/mineOpt1.png';
import mineOpt2 from './images/MineOpt/mineOpt2.png';
import mineOpt4 from './images/MineOpt/mineOpt4.png';
import Ace3_1 from './images/Ace3/Ace3_1.png';
import Ace3_2 from './images/Ace3/Ace3_2.png';
import Ace3_3 from './images/Ace3/Ace3_3.png';
import Ace3_4 from './images/Ace3/Ace3_4.png';
import Ace3_5 from './images/Ace3/Ace3_5.png';
import MaxflowApp_1 from './images/MaxflowApp/MaxflowApp_1.png';
import MaxflowApp_2 from './images/MaxflowApp/MaxflowApp_2.png';
import MaxflowApp_3 from './images/MaxflowApp/MaxflowApp_3.png';

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

export const PROJECT_DATA_EN: IProjectData[] = [
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
        images: [mineOpt1, mineOpt2, mineOpt4],
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
        images: [MaxflowApp_1, MaxflowApp_2, MaxflowApp_3],
        link: "https://maxflow.app/",
    },
    {
        name: "Book ecosystem - Final year project",
        projDescription: "Developed a book ecosystem application featuring an e-book and audiobook store with direct and online purchasing, a library for reading and listening, and an administrative book management system. Integrated a Recommendation System to provide personalized book suggestions for users.",
        company: "PTIT HANOI - POSTS AND TELECOMMUNICATIONS INSTITUTE OF TECHNOLOGY HANOI",
        startDate: "Aug 2023",
        endDate: "Dec 2023",
        position: "Full-stack Mobile Developer",
        technologies: ["React Native", "NestJS", "PostgreSQL", "Python"],
        description: [
            "Developed the mobile application UI using React Native, ensuring a seamless and user-friendly experience.",
            "Designed and developed RESTful APIs using NestJS for efficient and scalable backend services.",
            "Developed the database schema and implemented data storage using PostgreSQL.",
            "Integrated a Recommendation System to provide personalized book suggestions for users.",
        ],
        video: "book.mp4",
    },
    {
        name: "ACE 3 - Analytics Crowdsourcing Environment Version 3",
        projDescription: "An application for data visualization, analysis, and prediction or identification of exceptions based on data analysis through algorithms.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Apr 2023",
        endDate: "Nov 2024",
        position: "Full-stack Developer",
        technologies: ["ReactJS", "TypeScript", "Flask", "Fast API", "MySQL"],
        description: [
            "Developed project modules as independent functions and components, then integrated them into the main application for seamless functionality.",
            "Analyzed requirements and processed data streams to ensure efficient data handling and system performance.",
            "Optimize application speed and performance.",
            "Developed RESTful APIs using Python FastAPI for efficient and scalable backend services.",
            "Developed the website UI using ReactJS and TypeScript, ensuring a responsive and maintainable interface.",
        ],
        images: [Ace3_1, Ace3_2, Ace3_3, Ace3_4, Ace3_5],
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


export const PROJECT_DATA_RU: IProjectData[] = [
    {
        name: "1SK - Умная платформа для фитнеса и здравоохранения",
        projDescription: "Платформа, предоставляющая персонализированный опыт в области фитнеса и здравоохранения для пользователей.",
        company: "ELCOM CORP",
        startDate: "Дек 2021",
        endDate: "Мар 2022",
        position: "Front-end разработчик",
        technologies: ["NuxtJs", "VueJs"],
        description: [
            "Разработал CMS веб-сайт с функциями, включая избранные статьи, создание уведомлений для пользователей и автоматическую доставку уведомлений на веб-сайте и приложении 1SK.",
            "Решил проблемы с пользовательским интерфейсом для электронной коммерции проекта 1SK, обеспечив беспрепятственный и удобный опыт для пользователей.",
        ],
        images: [],
        link: "https://1sk.vn/",
    },
    {
        name: "PastePin",
        projDescription: "Личный проект, разработанный под руководством наставника. Веб-сайт позволяет управлять и хранить код на нескольких языках программирования, а также безопасно делиться им среди внутренних пользователей компании.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Май 2022",
        endDate: "Июль 2022",
        position: "Full-stack разработчик",
        technologies: ["Flask", "SQLAlchemy", "jQuery"],
        description: [
            "Разработал пользовательский интерфейс веб-сайта с использованием Bootstrap и jQuery.",
            "Спроектировал архитектуру системы и базы данных.",
            "Создал RESTful API с использованием Flask.",
        ],
        images: [],
    },
    {
        name: "MineOpt - Оптимизация добычи",
        projDescription: "Веб-сайт, позволяющий создавать 3D модели симуляции и вычислять реальные сценарии, связанные с транспортировкой материалов на шахтах и строительных площадках.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Июль 2022",
        endDate: "Дек 2022",
        position: "Front-end разработчик",
        technologies: ["jQuery", "ReactJS", "Typescript"],
        description: [
            "Разработал пользовательский интерфейс веб-сайта и интегрировал API для реализации специфических функций с использованием Bootstrap и jQuery.",
            "Мигрировал фронтенд проект на новую архитектуру с использованием ReactJS и TypeScript, улучшив производительность и поддерживаемость.",
        ],
        images: [mineOpt1, mineOpt2, mineOpt4],
    },
    {
        name: "Maxflow App",
        projDescription: "Maxflow.app - это веб-платформа для автоматизации процессов, позволяющая пользователям соединять простые компоненты для создания рабочих процессов, выполняющих гибкие и сложные задачи.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Дек 2023",
        endDate: "Июнь 2023",
        position: "Front-end разработчик",
        technologies: ["ReactJS", "Webpack", "MicroFront-end"],
        description: [
            "Проектировал и поддерживал компоненты и настройки конфигурации для каждого элемента в 'Пользовательском интерфейсе'.",
            "Постоянно изучал и внедрял новые технологии и методы, такие как Webpack и Micro Frontend, для улучшения и оптимизации существующих систем.",
            "Использовал Webpack для сборки компонентов и их развертывания на сервере для эффективного управления активами и оптимизации производительности.",
            "Реализовал технологии Webpack и Micro Frontend для облегчения взаимодействия между пользователями, компонентами и Maxflow.app, бесшовно интегрируя их в рабочие процессы пользователей.",
        ],
        images: [MaxflowApp_1, MaxflowApp_2, MaxflowApp_3],
        link: "https://maxflow.app/",
    },
    {
        name: "Книжная экосистема - Дипломный проект",
        projDescription: "Разработано приложение для книжной экосистемы с магазином электронных и аудиокниг с возможностью прямой и онлайн покупки, библиотекой для чтения и прослушивания, а также административной системой управления книгами. Интегрирована система рекомендаций для предоставления персонализированных предложений книг пользователям.",
        company: "PTIT HANOI - ИНСТИТУТ ПОЧТЫ И ТЕЛЕКОММУНИКАЦИЙ ХАНОЙ",
        startDate: "Авг 2023",
        endDate: "Дек 2023",
        position: "Full-stack мобильный разработчик",
        technologies: ["React Native", "NestJS", "PostgreSQL", "Python"],
        description: [
            "Разработал пользовательский интерфейс мобильного приложения с использованием React Native, обеспечив беспрепятственный и удобный опыт для пользователей.",
            "Спроектировал и разработал RESTful API с использованием NestJS для эффективных и масштабируемых бэкенд-сервисов.",
            "Разработал схему базы данных и реализовал хранение данных с использованием PostgreSQL.",
            "Интегрировал систему рекомендаций для предоставления персонализированных предложений книг пользователям.",
        ],
        video: "book.mp4",
    },
    {
        name: "ACE 3 - Среда краудсорсинга аналитики версия 3",
        projDescription: "Приложение для визуализации данных, анализа и прогнозирования или выявления исключений на основе анализа данных с помощью алгоритмов.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Апр 2023",
        endDate: "Ноя 2024",
        position: "Full-stack разработчик",
        technologies: ["ReactJS", "TypeScript", "Flask", "Fast API", "MySQL"],
        description: [
            "Разработал модули проекта как независимые функции и компоненты, затем интегрировал их в основное приложение для бесшовной работы.",
            "Анализировал требования и обрабатывал потоки данных для обеспечения эффективного управления данными и производительности системы.",
            "Оптимизировал скорость и производительность приложения.",
            "Разработал RESTful API с использованием Python FastAPI для эффективных и масштабируемых бэкенд-сервисов.",
            "Разработал пользовательский интерфейс веб-сайта с использованием ReactJS и TypeScript, обеспечив отзывчивый и поддерживаемый интерфейс.",
        ],
        images: [Ace3_1, Ace3_2, Ace3_3, Ace3_4, Ace3_5],
    },
    {
        name: "MaxGPT - Автоматизация рабочих процессов предприятия с помощью Gen AI",
        projDescription: "Разработаны автоматизированные рабочие процессы как инструменты AI помощника для улучшения операций предприятия. Позволяет сотрудникам использовать AI для повседневных задач, постоянно совершенствуя рабочие процессы на основе данных об использовании. Захватывает операционные данные для оптимизации процессов и обучает AI автономно управлять рабочими процессами, улучшая эффективность и масштабируемость.",
        company: "MAXFLOW TECHNOLOGY INC",
        startDate: "Окт 2024",
        endDate: "Настоящее время",
        position: "Full-stack разработчик",
        technologies: ["ReactJS", "Python", "Gen AI"],
        description: [
            "Разработал и поддерживал фронтенд приложение с использованием ReactJS, обеспечив отзывчивый и удобный интерфейс.",
            "Оптимизировал производительность и масштабируемость системы для поддержки непрерывной автоматизации рабочих процессов.",
            "Создал основные и широко используемые инструменты AI, адаптированные к потребностям предприятия.",
        ],
        video: "maxgpt.mp4",
        link: "https://maxflow.ai/",
    }
]  
