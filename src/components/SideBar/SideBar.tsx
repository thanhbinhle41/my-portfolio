import styles from './SideBar.module.scss'
import { NavigationMenu } from '../NavigationMenu/NavigationMenu'
import { EnglishIcon, RussiaIcon } from './LanguageIcon'
import { useAppContext } from '../../context/AppContext'
import avatar from '../../data/images/avatar.png'

const SideBar = () => {
    const { language, setLanguage } = useAppContext();

    const onClickLanguage = (lng: string) => {
        setLanguage(lng);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div>
                    <div className={styles.ownerName}>
                        <span>Le Thanh Binh</span>
                    </div>
                    <div className={`${styles.title} ${styles.titleProfile}`}>
                        <span>{language === "en" ? "Web Developer" : "Веб-разработчик"}</span>
                    </div>
                    <div className={`${styles.subTitle} ${styles.subDescription}`}>
                        <span>Viet Nam | 21/01/2001</span>
                    </div>

                    <div className={styles.avatar}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <div className={styles.navigationn}>
                        <NavigationMenu />
                    </div>
                    <div className={styles.language}>
                        <div
                            className={`${styles.languageItem} ${language === 'en' ? styles.selected : ''}`}
                            onClick={() => onClickLanguage('en')}
                        >
                            <EnglishIcon />
                        </div>
                        <div
                            className={`${styles.languageItem} ${language === 'ru' ? styles.selected : ''}`}
                            onClick={() => onClickLanguage('ru')}
                        >
                            <RussiaIcon />
                        </div>
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
            <div className={styles.avatarTablet}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    )
}

export default SideBar