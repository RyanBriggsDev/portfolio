import { useEffect } from "react"

function TwitterRedirect() {
    useEffect(() => {
        window.location.replace('https://twitter.com/ryanbriggsdev')
      }, [])
  return (
    <div>Loading...</div>
  )
}

export default TwitterRedirect