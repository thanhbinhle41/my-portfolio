import React, { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

interface IZoomImageProps {
    images: string[];
    defaultIndex: number;
    onClose?: () => void;
    isZoomed: boolean;
}

const ZoomImages = (props: IZoomImageProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
       setCurrentIndex(props.defaultIndex);
    }, [props.defaultIndex]);

    const closeZoom = useCallback(() => {
        props.onClose && props.onClose();
    }, [props]);

    // Close zoom on "Escape" key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") closeZoom();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [closeZoom]);



    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % props.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + props.images.length) % props.images.length);
    };

    return (
        <div>
            {/* Custom Zoom Modal with Animation */}
            <AnimatePresence>
                {props.isZoomed && props.images.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeZoom}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                        }}
                    >
                        <button
                            onClick={prevImage}
                            style={{
                                position: "absolute",
                                left: "10%",
                                background: "rgba(255, 255, 255, 0.5)",
                                color: "black",
                                fontSize: "20px",
                                padding: "10px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            ◀
                        </button>

                        <motion.img
                            src={props.images[currentIndex]}
                            alt="Zoomed"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: "10px" }}
                        />

                        <button
                            onClick={nextImage}
                            style={{
                                position: "absolute",
                                right: "10%",
                                background: "rgba(255, 255, 255, 0.5)",
                                color: "black",
                                fontSize: "20px",
                                padding: "10px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            ▶
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ZoomImages