import React, { useEffect, useState } from 'react'
import styles from './MainPage.module.scss'
import SideBar from '../../components/SideBar/SideBar';
import MainContent from '../../components/MainContent/MainContent';

const MainPage = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.pageX, y: e.pageY });
        };

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.mouseContainer}>
                <div className={styles.wrapper}>
                    <div className={styles.sidebar}>
                        <SideBar />
                    </div>
                    <div className={styles.mainContent}>
                        <div className={styles.mainWrapper}>
                            <MainContent />
                        </div>
                    </div>
                </div>
                <div
                    className={styles.mouseHighlight}
                    style={{
                        background: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default MainPage