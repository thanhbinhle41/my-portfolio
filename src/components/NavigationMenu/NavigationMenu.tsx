import React, { useEffect } from 'react'
import styles from './NavigationMenu.module.scss'
import useActiveSection from '../../app/useActiveSection';

const NAV_LIST: { name: string, }[] = [
    { name: 'ABOUT' },
    { name: 'EDUCATION' },
    { name: 'EXPERIENCE' },
    { name: 'PROJECTS' },
    { name: 'ACTIVITIES' },
];

export const NavigationMenu = () => {
    const activeSection = useActiveSection(NAV_LIST.map((nav) => nav.name.toLowerCase()));

    const [selected, setSelected] = React.useState("");

    const onClick = (e: React.MouseEvent<HTMLDivElement>, name: string) => {
        setSelected(name);
        const element = document.getElementById(name.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(() => {
        setSelected(activeSection.toUpperCase());
    }, [activeSection]);

    return (
        <div className={styles.container}>
            {NAV_LIST.map((nav, index) => (
                <div
                    key={index} className={`${styles.navItem} ${selected === nav.name ? styles.selected : ''}`}
                    onClick={(e) => onClick(e, nav.name)}
                >
                    <div className={styles.navLine}></div>
                    <span>{nav.name}</span>
                </div>
            ))}
        </div>
    )
}
