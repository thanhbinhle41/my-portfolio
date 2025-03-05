import React, { useEffect, useState } from 'react'
import styles from './MainContent.module.scss'
import { ABOUT_DATA_EN, ABOUT_DATA_RU } from '../../data/AboutData'
import { EXPERIENCE_DATA_EN, EXPERIENCE_DATA_RU } from '../../data/ExperienceData'
import { EDUCATION_DATA_EN, EDUCATION_DATA_RU } from '../../data/EducationData'
import { PROJECT_DATA_EN, PROJECT_DATA_RU } from '../../data/ProjectData'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../../data/images/1.jpg';
import image2 from '../../data/images/2.jpg';
import image3 from '../../data/images/3.jpg';
import image5 from '../../data/images/5.jpg';
import image6 from '../../data/images/6.jpg';
import image7 from '../../data/images/7.jpg';
import image8 from '../../data/images/8.jpg';
import image9 from '../../data/images/9.jpg';
import image10 from '../../data/images/10.jpg';
import ZoomImages from '../ZoomImages/ZoomImages'
import { useAppContext } from '../../context/AppContext'


const REVERSE_PROJECT_DATA_EN = [...PROJECT_DATA_EN].reverse();
const REVERSE_PROJECT_DATA_RU = [...PROJECT_DATA_RU].reverse();

const MainContent = () => {
    const { language } = useAppContext();

    const [showMoreProjs, setShowMoreProjs] = React.useState(true);
    const [projectsData, setProjectsData] = React.useState(REVERSE_PROJECT_DATA_EN.slice(0, 3));

    const [aboutData, setAboutData] = useState(ABOUT_DATA_EN);
    const [educationData, setEducationData] = useState(EDUCATION_DATA_EN);
    const [experienceData, setExperienceData] = useState(EXPERIENCE_DATA_EN);


    const [listImagesZoom, setListImagesZoom] = useState<string[]>([]);
    const [currentIndexZoom, setCurrentIndexZoom] = useState<number>(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const images = [image1, image2, image3, image5, image6, image7, image8, image9, image10];

    useEffect(() => {
        if (language === 'en') {
            setAboutData(ABOUT_DATA_EN);
            setEducationData(EDUCATION_DATA_EN);
            setExperienceData(EXPERIENCE_DATA_EN);
            setProjectsData(REVERSE_PROJECT_DATA_EN.slice(0, 3));
        } else {
            setAboutData(ABOUT_DATA_RU);
            setEducationData(EDUCATION_DATA_RU);
            setExperienceData(EXPERIENCE_DATA_RU);
            setProjectsData(REVERSE_PROJECT_DATA_RU.slice(0, 3));
        }
    }, [language]);

    const onClickShowMore = () => {
        const newLength = projectsData.length + 3;
        const data = language === 'en' ? REVERSE_PROJECT_DATA_EN : REVERSE_PROJECT_DATA_RU;
        if (newLength >= data.length) {
            setProjectsData(data);
            setShowMoreProjs(false);
        } else {
            setProjectsData(data.slice(0, newLength));
        }
    }

    const onClickHideLess = () => {
        const data = language === 'en' ? REVERSE_PROJECT_DATA_EN : REVERSE_PROJECT_DATA_RU;
        setProjectsData(data.slice(0, 3));
        setShowMoreProjs(true);
    }

    const goToLink = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className={styles.container}>
            <div className={styles.about} id="about">
                <div className={styles.headerTitle}>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                    <div className={styles.titleUpper}>{language === "en" ? "ABOUT" : "ОБО МНЕ"}</div>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                </div>
                {aboutData.map((item, index) => (
                    <p key={index} className={styles.aboutItem}>{item}</p>
                ))}
            </div>

            <div className={styles.education} id="education">
                <div className={styles.headerTitle}>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                    <div className={styles.titleUpper}>{language === "en" ? "EDUCATION" : "ОБРАЗОВАНИЕ"}</div>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                </div>
                {educationData.map((item, index) => {
                    return (
                        <div className={`${styles.educationItem} ${styles.hoverItem}`} key={index}>
                            <div
                                className={styles.titleUpper}
                                style={{ cursor: item.link ? 'pointer' : 'default' }}
                                onClick={() => item.link && goToLink(item.link)}
                            >
                                {(item.name.toUpperCase())}
                                {item.link &&
                                    <div className={styles.linkIcon}>
                                        <i className="fa-solid fa-up-right-from-square"></i>
                                    </div>
                                }
                            </div>
                            <div className={styles.majorTime}>
                                <div className={`${styles.major} ${styles.subTitleUpper}`}>{(item.fieldOfStudy.toUpperCase())}</div>
                                <div className={styles.time}>
                                    <div className={styles.subTitleUpper}>{item.startYear}</div>
                                    <div className={styles.line}></div>
                                    <div className={styles.subTitleUpper}>{item.endYear}</div>
                                </div>
                            </div>
                            <ul className={styles.description}>
                                {item.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>

            <div className={styles.experience} id="experience">
                <div className={styles.headerTitle}>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                    <div className={styles.titleUpper}>{language === "en" ? "EXPERIENCE" : "ОПЫТ"}</div>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                </div>
                {experienceData.map((item, index) => {
                    return (
                        <div className={`${styles.experienceItem} ${styles.hoverItem}`} key={index}>
                            <div className={styles.leftWrapper}>
                                <div className={styles.time}>
                                    <div className={styles.subTitleUpper}>{(item.startDate).toUpperCase()}</div>
                                    <div className={styles.line}></div>
                                    <div className={styles.subTitleUpper}>{(item.endDate).toUpperCase()}</div>
                                </div>
                                <div className={styles.companyWrapper}>
                                    <div
                                        className={styles.titleUpper}
                                        style={{ cursor: item.link ? 'pointer' : 'default' }}
                                        onClick={() => item.link && goToLink(item.link)}
                                    >
                                        {(item.company).toUpperCase()}
                                        {item.link &&
                                            <div className={styles.linkIcon}>
                                                <i className="fa-solid fa-up-right-from-square"></i>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>

                            <div className={styles.rightWrapper}>
                                <div className={styles.titleUpper}>{(item.title).toUpperCase()}</div>
                                <ul className={styles.description}>
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.projects} id="projects">
                <div className={styles.headerTitle}>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                    <div className={styles.titleUpper}>{language === "en" ? "PROJECTS" : "ПРОЕКТЫ"}</div>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                </div>
                {projectsData.map((item, index) => {
                    return (
                        <div className={`${styles.projectsItem} ${styles.hoverItem}`} key={index} >
                            <div className={styles.leftWrapper}>
                                <div className={styles.time}>
                                    <div className={styles.subTitleUpper}>{(item.startDate).toUpperCase()}</div>
                                    <div className={styles.line}></div>
                                    <div className={styles.subTitleUpper}>{(item.endDate).toUpperCase()}</div>
                                </div>

                                <div className={styles.projName}>
                                    <div
                                        className={styles.titleUpper}
                                        style={{ cursor: item.link ? 'pointer' : 'default' }}
                                        onClick={() => item.link && goToLink(item.link)}
                                    >
                                        {item.name}
                                        {item.link &&
                                            <div className={styles.linkIcon}>
                                                <i className="fa-solid fa-up-right-from-square"></i>
                                            </div>
                                        }
                                    </div>

                                    <div className={styles.subTitleUpper}>{item.company}</div>
                                    <div className={styles.subTitleUpper}>{`Position: ${item.position}`}</div>
                                </div>

                                <div className={styles.media}>
                                    {item.video &&
                                        <div className={styles.videoWrapper}>
                                            <video controls preload="none">
                                                <source src={`/videos/${item.video}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    }
                                    {item.images && item.images.length > 0 &&
                                        <div className={styles.imgWrapper}>
                                            <Carousel dynamicHeight={true} swipeable={true} emulateTouch={true} showThumbs={false} >
                                                {item.images.map((img, index) => (
                                                    <div key={index}
                                                        style={{ cursor: "zoom-in" }}
                                                        onClick={() => {
                                                            setListImagesZoom(item.images ? item.images : []);
                                                            setCurrentIndexZoom(index);
                                                            setIsZoomed(true);
                                                        }}
                                                    >
                                                        <img
                                                            src={img} alt="projects_img"
                                                            loading='lazy'
                                                            style={{ cursor: "pointer", maxHeight: "400px", objectFit: "cover" }} />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className={styles.rightWrapper}>
                                <div className={styles.projDescription}>{item.projDescription}</div>
                                <ul className={styles.description}>
                                    {item.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                                <div className={styles.techWrapper}>
                                    {item.technologies.map((tech, i) => (
                                        <div key={i} className={styles.techItem}>{tech}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                })}

                <div className={styles.showMore}>
                    {showMoreProjs
                        ? <div className={styles.showMoreBtn} onClick={onClickShowMore}>
                            <span>Show more</span>
                            <div className={styles.icon}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        : <div className={styles.showMoreBtn} onClick={onClickHideLess}>
                            <span>Show less</span>
                            <div className={styles.icon}>
                                <i className="fas fa-chevron-up"></i>
                            </div>
                        </div>
                    }
                    <div>

                    </div>
                </div>
            </div>

            <div className={styles.activities} id="activities">
                <div className={styles.headerTitle}>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                    <div className={styles.titleUpper}>{language === "en" ? "ACTIVITES" : "ДЕЯТЕЛЬНОСТЬ"}</div>
                    <div className={styles.headerLine}>
                        <span></span>
                    </div>
                </div>
                <div className={styles.activitiesDescription}>
                    {language === "en" ?
                        <span>Also I am an outgoing individual who enjoys sports and actively organizes events in both academic and corporate settings. These experiences have strengthened my teamwork, leadership, and organizational skills.</span>
                        :
                        <span>Также я общительный человек, который любит спорт и активно организует мероприятия как в академической, так и в корпоративной среде. Этот опыт укрепил мои навыки командной работы, лидерства и организационные навыки.</span>
                    }
                </div>
                <div className={styles.imgWrapper}>
                    <Carousel dynamicHeight={true} swipeable={true} emulateTouch={true} selectedItem={4}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <img className={styles.noSelect} src={img} alt="activity" loading='lazy' />
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>

            <ZoomImages
                images={listImagesZoom}
                defaultIndex={currentIndexZoom}
                onClose={() => {
                    setCurrentIndexZoom(0);
                    setListImagesZoom([]);
                    setIsZoomed(false);
                }}
                isZoomed={isZoomed}
            />
        </div>
    )
}

export default MainContent;