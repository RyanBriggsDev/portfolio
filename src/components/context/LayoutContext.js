import { createContext } from "react";

const LayoutContext = createContext()

export const LayoutProvider = ({ children }) => {

    return <LayoutContext.Provider value={{
        
    }}>
        {children}
    </LayoutContext.Provider>
}

export default LayoutContext