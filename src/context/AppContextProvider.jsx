import React, { useState } from 'react';

const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false); 
    const [activeSec, setActiveSec] = useState("#home");
    const [hoverSec, setHoverSec] = useState(null);
    return (
        <AppContext.Provider value={{
            loading, 
            setLoading,
            menu,
            setMenu,
            activeSec, 
            setActiveSec,
            hoverSec, 
            setHoverSec
        }}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContextProvider, AppContext};