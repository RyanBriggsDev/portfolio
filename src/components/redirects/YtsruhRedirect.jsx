import { useEffect } from "react"
import Loading from "../layout/Loading"

function YtsruhRedirect() {
    useEffect(() => {
        window.location.replace('https://www.ytsruh.com/')
      }, [])
  return <Loading />
}

export default YtsruhRedirect