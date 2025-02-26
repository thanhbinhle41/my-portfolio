import React from 'react'
import styles from './NavigationMenu.module.scss'

const NAV_LIST: { name: string, isActived: boolean }[] = [
    { name: 'ABOUT', isActived: false },
    { name: 'EDUCATION', isActived: false },
    { name: 'EXPERIENCE', isActived: false },
    { name: 'PROJECTS', isActived: false },
];

export const NavigationMenu = () => {
    const [selected, setSelected] = React.useState(0);

    const onClick = (e: React.MouseEvent<HTMLDivElement>, index: number, name: string) => {
        setSelected(index);
        const element = document.getElementById(name.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className={styles.container}>
            {NAV_LIST.map((nav, index) => (
                <div
                    key={index} className={`${styles.navItem} ${selected === index ? styles.selected : ''}`}
                    onClick={(e) => onClick(e, index, nav.name)}
                >
                    <div className={styles.navLine}></div>
                    <span>{nav.name}</span>
                </div>
            ))}
        </div>
    )
}
