import { createContext, useState, useEffect } from "react";

const LayoutContext = createContext()

export const LayoutProvider = ({ children }) => {

    // state
    const [repos, setRepos] = useState({})
    const [loading, setLoading] = useState(false)
    const [callComplete, setCallComplete] = useState(false)

    // import repos
    const fetchRepos = async () => {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/ryanbriggsdev/repos?per_page=6&sort=updated')
        const data = await response.json()
        setRepos(data)
        setLoading(false)
        setCallComplete(true)
    }

    return <LayoutContext.Provider value={{
        fetchRepos,
        repos,
        loading,
        callComplete,
    }}>
        {children}
    </LayoutContext.Provider>
}

export default LayoutContext