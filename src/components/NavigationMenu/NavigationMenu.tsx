import React, { useEffect } from 'react'
import styles from './NavigationMenu.module.scss'
import useActiveSection from '../../app/useActiveSection';
import { useAppContext } from '../../context/AppContext';

const NAV_LIS_EN: { label: string, name: string}[] = [
    { label: 'ABOUT', name: "about" },
    { label: 'EDUCATION', name: "education" },
    { label: 'EXPERIENCE', name: "experience" },
    { label: 'PROJECTS', name: "projects" },
    { label: 'ACTIVITIES', name: "activities" },
];

const NAV_LIS_RU: { label: string, name: string}[] = [
    { label: 'ОБО МНЕ', name: "about" },
    { label: 'ОБРАЗОВАНИЕ', name: "education" },
    { label: 'ОПЫТ', name: "experience" },
    { label: 'ПРОЕКТЫ', name: "projects" },
    { label: 'ДЕЯТЕЛЬНОСТЬ', name: "activities" },
];

export const NavigationMenu = () => {
    const { language } = useAppContext();
    const [navList, setNavList] = React.useState(NAV_LIS_EN);


    const activeSection = useActiveSection(navList.map((nav) => nav.name.toLowerCase()));

    const [selected, setSelected] = React.useState("");

    const onClick = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
        setSelected(name);
        const element = document.getElementById(name.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        if (language === 'en') {
            setNavList(NAV_LIS_EN);
        }
        else if (language === 'ru') {
            setNavList(NAV_LIS_RU);
        }
    }, [language]);

    useEffect(() => {
        if (activeSection) {
            setSelected(activeSection.toLowerCase());
        }
    }, [activeSection]);

    return (
        <div className={styles.container}>
            {navList.map((nav, index) => (
                <div
                    key={index} className={`${styles.navItem} ${selected === nav.name ? styles.selected : ''}`}
                    onClick={(e) => onClick(e, nav.name)}
                >
                    <div className={styles.navLine}></div>
                    <span>{nav.label}</span>
                </div>
            ))}
        </div>
    )
}
