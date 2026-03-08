import { useEffect, useRef } from 'react'
import styles from './MainPage.module.scss'
import SideBar from '../../components/SideBar/SideBar';
import MainContent from '../../components/MainContent/MainContent';

const MainPage = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollElement = scrollContainerRef.current;

        const updateMousePosition = (e: MouseEvent) => {
            const wrapperRefElement = wrapperRef.current;
            if (scrollElement && wrapperRefElement) {
                const x = e.clientX;
                const y = e.clientY + scrollElement.scrollTop;
                wrapperRefElement.style.setProperty("--gradientX", `${x}px`);
                wrapperRefElement.style.setProperty("--gradientY", `${y}px`);
            }
        };


        if (scrollElement) {
            scrollElement.addEventListener("mousemove", updateMousePosition);
        }

        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.scrollContainer} ref={scrollContainerRef} id={"scrollable-container"}>
                <div className={styles.wrapper} ref={wrapperRef}>
                    <div className={styles.contentWrapper}>
                        <div className={styles.content}>
                            <div className={styles.sideBar}>
                                <SideBar />
                            </div>
                            <div className={styles.mainContent}>
                                <MainContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage