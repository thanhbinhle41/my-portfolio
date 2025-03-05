import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextProps {
    language: string;
    setLanguage: (language: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');

    return (
        <AppContext.Provider value={{ language, setLanguage }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextProps => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};