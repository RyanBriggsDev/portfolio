import {useEffect} from 'react'
import Loading from '../layout/Loading'

function GithubRedirect() {

  useEffect(() => {
    window.location.replace('https://github.com/RyanBriggsDev')
  }, [])

  return <Loading />
}

export default GithubRedirect