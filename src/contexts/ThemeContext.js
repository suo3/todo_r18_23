import { createContext, useState } from "react";
import  useTheme  from "../hooks/useTheme"



export const ThemeContext = createContext({});
export const ThemeContextPrivider = ({children}) => {
    const value = useTheme();

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}