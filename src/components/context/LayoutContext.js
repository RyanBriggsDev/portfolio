import { createContext, useState } from "react";

const LayoutContext = createContext()

export const LayoutProvider = ({ children }) => {

    // state
    const [repos, setRepos] = useState({})
    const [loading, setLoading] = useState(false)

    // import repos
    const fetchRepos = async () => {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/ryanbriggsdev/repos')
        const repos = await response.json()
        setRepos(repos)
        setLoading(false)
    }

    return <LayoutContext.Provider value={{
        fetchRepos,
        repos,
        loading,
    }}>
        {children}
    </LayoutContext.Provider>
}

export default LayoutContext