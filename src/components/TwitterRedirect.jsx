import { useEffect } from "react"
import Loading from "./layout/Loading"

function TwitterRedirect() {
    useEffect(() => {
        window.location.replace('https://twitter.com/ryanbriggsdev')
      }, [])
  return <Loading />
}

export default TwitterRedirect