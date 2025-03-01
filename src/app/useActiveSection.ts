import { useEffect, useState } from "react";

const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // At least 50% of the section must be visible
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .map((entry) => ({
                    id: entry.target.id,
                    top: entry.boundingClientRect.top, // Get section position
                }));

            if (visibleSections.length > 0) {
                // Sort sections by their position (smallest `top` means higher on screen)
                visibleSections.sort((a, b) => a.top - b.top);
                setActiveSection(visibleSections[0].id); // Select the uppermost section
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const elements = sectionIds.map((id) => document.getElementById(id));

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            elements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;
