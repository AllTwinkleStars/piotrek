'use client';

import { createContext, useContext, useState } from "react";

const MenuContext = createContext({})

export const MenuContextProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // console.log(isMenuOpen)

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    )
};

export const useMenuContext = () => useContext(MenuContext);