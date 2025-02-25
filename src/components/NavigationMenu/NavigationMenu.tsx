import React from 'react'
import styles from './NavigationMenu.module.scss'

const NAV_LIST: { name: string, isActived: boolean }[] = [
    { name: 'ABOUT', isActived: false },
    { name: 'EXPERIENCE', isActived: false },
    { name: 'PROJECTS', isActived: false },
];

export const NavigationMenu = () => {
    const [selected, setSelected] = React.useState(0);


    return (
        <div className={styles.container}>
            {NAV_LIST.map((nav, index) => (
                <a 
                    key={index} className={`${styles.navItem} ${selected === index ? styles.selected : ''}`} 
                    href={`#${(nav.name).toLowerCase()}`}
                    onClick={() => setSelected(index)}
                >
                    <div className={styles.navLine}></div>
                    <span>{nav.name}</span>
                </a>
            ))}
        </div>
    )
}
