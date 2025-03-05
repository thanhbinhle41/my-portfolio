import { useState, useEffect, useRef } from "react";

const useActiveSection = (ids: string[], debounceMs = 100): string | null => {
    const [mostVisibleId, setMostVisibleId] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibilityMap: Record<string, number> = {};

                entries.forEach((entry) => {
                    visibilityMap[entry.target.id] = entry.intersectionRatio;
                });

                // Find the element with the highest visibility ratio
                const mostVisible = Object.entries(visibilityMap)
                    .sort((a, b) => b[1] - a[1])[0]?.[0];

                if (mostVisible) {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    timeoutRef.current = setTimeout(() => setMostVisibleId(mostVisible), debounceMs);
                }
            },
            { threshold: Array.from({ length: 11 }, (_, i) => i * 0.1) } // Thresholds from 0.0 to 1.0
        );

        elements.forEach((el) => {
            if (el) {
                observer.observe(el);
            }
        });

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            elements.forEach((el) => {
                if (el) {
                    observer.unobserve(el);
                }
            });
            observer.disconnect();
        };
    }, [ids, debounceMs]);

    return mostVisibleId;
};

export default useActiveSection;
