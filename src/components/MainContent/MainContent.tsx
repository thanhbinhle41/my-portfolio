import React from 'react'
import styles from './MainContent.module.scss'
import { ABOUT_DATA } from '../../data/AboutData'
import { EXPERIENCE_DATA } from '../../data/ExperienceData'

const MainContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.about} id="about">
                {ABOUT_DATA.map((item, index) => (
                    <p key={index} className={styles.aboutItem}>{item}</p>
                ))}
            </div>

            <div className={styles.experience} id="experience">
                {EXPERIENCE_DATA.map((item, index) => {
                    return (
                        <div className={styles.experienceItem} key={index}>
                            <div className={styles.leftWrapper}>
                                <div className={styles.time}>
                                    <div className={styles.dateTime}>{(item.startDate).toUpperCase()}</div>
                                    <div className={styles.line}></div>
                                    <div className={styles.dateTime}>{(item.endDate).toUpperCase()}</div>
                                </div>
                                <div className={styles.company}>{(item.company).toUpperCase()}</div>
                            </div>

                            <div className={styles.rightWrapper}>
                                <div className={styles.title}>{(item.title).toUpperCase()}</div>
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
        </div>
    )
}

export default MainContent