import {useEffect} from 'react'

function GithubRedirect() {

  useEffect(() => {
    window.location.replace('https://github.com/RyanBriggsDev')
  }, [])

  return (
    <div>Loading...</div>
  )
}

export default GithubRedirect