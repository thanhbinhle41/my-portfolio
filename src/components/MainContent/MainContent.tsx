import React from 'react'
import styles from './MainContent.module.scss'
import { ABOUT_DATA } from '../../data/AboutData'
import { EXPERIENCE_DATA } from '../../data/ExperienceData'
import { EDUCATION_DATA } from '../../data/EducationData'

const MainContent = () => {
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
                                <div className={styles.titleUpper}>{(item.company).toUpperCase()}</div>
                            </div>

                            <div className={styles.rightWrapper}>
                                <div className={styles.titleUpper}>{(item.title).toUpperCase()}</div>
                                <ul className={styles.description}>
                                    {item.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className={styles.projects}></div>
        </div>
    )
}

export default MainContent