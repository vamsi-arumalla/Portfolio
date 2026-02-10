import React, { createContext, useState, useContext } from 'react';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    const [highlightedSkill, setHighlightedSkill] = useState(null);

    return (
        <PortfolioContext.Provider value={{ highlightedSkill, setHighlightedSkill }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (!context) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
