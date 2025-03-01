import React from 'react'
import styles from './MainContent.module.scss'
import { ABOUT_DATA } from '../../data/AboutData'
import { EXPERIENCE_DATA } from '../../data/ExperienceData'
import { EDUCATION_DATA } from '../../data/EducationData'
import { PROJECT_DATA } from '../../data/ProjectData'

const REVERSE_PROJECT_DATA = [...PROJECT_DATA].reverse();

const MainContent = () => {

    const [showMoreProjs, setShowMoreProjs] = React.useState(true);
    const [projects, setProjects] = React.useState(REVERSE_PROJECT_DATA.slice(0, 3));

    const onClickShowMore = () => {
        const newLength = projects.length + 3;
        if (newLength >= REVERSE_PROJECT_DATA.length) {
            setProjects(REVERSE_PROJECT_DATA);
            setShowMoreProjs(false);
        } else {
            setProjects(REVERSE_PROJECT_DATA.slice(0, newLength));
        }
    }

    const onClickHideLess = () => {
        setProjects(REVERSE_PROJECT_DATA.slice(0, 3));
        setShowMoreProjs(true);
    }

    const goToLink = (link: string) => {
        window.open(link, '_blank');
    }

    return (
        <div className={styles.container}>
            <div className={styles.about} id="about">
                {ABOUT_DATA.map((item, index) => (
                    <p key={index} className={styles.aboutItem}>{item}</p>
                ))}
            </div>

            <div className={styles.education} id="education">
                {EDUCATION_DATA.map((item, index) => {
                    return (
                        <div className={`${styles.educationItem} ${styles.hoverItem}`} key={index}>
                            <div className={styles.titleUpper}>{(item.name.toUpperCase())}</div>
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
                {EXPERIENCE_DATA.map((item, index) => {
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
                {projects.map((item, index) => {
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
                                            <video controls>
                                                <source src={`/videos/${item.video}`} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
                                    }
                                    {item.images && item.images.map((img, i) => (
                                        <img key={i} src={img} alt="project" />
                                    ))}
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

            <div className={styles.projects}></div>
        </div>
    )
}

export default MainContent