import React from 'react'
import styles from './SideBar.module.scss'

const SideBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.ownerName}>
                        <span>Le Thanh Binh</span>
                    </div>
                    <div className={styles.title}>
                        <span>Web Developer</span>
                    </div>
                    <div className={styles.subTitle}>
                        <span>I build accessible, pixel-perfect digital experiences for the web.</span>
                    </div>

                    <div className={styles.navBar}>

                    </div>
                </div>
                <div className={styles.socialLinks}>
                    <a className={styles.socialItem} href='https://www.linkedin.com/in/le-thanh-binh-23151926a/' >
                        <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a className={styles.socialItem} href='https://github.com/thanhbinhle41'>
                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a className={styles.socialItem} href='mailto:thanhbinhle41@gmail.com'>
                        <i className="fa-brands fa-google" aria-hidden="true"></i>
                    </a>
                    <a className={styles.socialItem} href='https://t.me/binhtle21'>
                        <i className="fa-brands fa-telegram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideBar