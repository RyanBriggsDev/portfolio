import { createContext, useState, useEffect } from "react";

const LayoutContext = createContext()

export const LayoutProvider = ({ children }) => {

    // state
    const [repos, setRepos] = useState({})
    const [loading, setLoading] = useState(false)
    const [callComplete, setCallComplete] = useState(false)
    const [allRepos, setAllRepos] = useState({})
    const [allCallsComplete, setAllCallsComplete] = useState(false)

    // import 6 repos
    const fetchRepos = async () => {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/ryanbriggsdev/repos?per_page=6&sort=updated')
        const data = await response.json()
        setRepos(data)
        setLoading(false)
        setCallComplete(true)
    }

    // import all repos
    const fetchAllRepos = async () => {
        setLoading(true)
        const response = await fetch('https://api.github.com/users/ryanbriggsdev/repos?sort=updated')
        const data = await response.json()
        setAllRepos(data)
        setLoading(false)
        setAllCallsComplete(true)
    }

    return <LayoutContext.Provider value={{
        fetchRepos,
        repos,
        loading,
        callComplete,
        fetchAllRepos,
        allRepos,
        allCallsComplete,
    }}>
        {children}
    </LayoutContext.Provider>
}

export default LayoutContext