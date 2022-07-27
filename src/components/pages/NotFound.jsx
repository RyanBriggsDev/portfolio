import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
      <h1>404!</h1>
      <p>Houston, we have a problem.</p>
      <Link to="/"> <button className="btn btn-primary">Back to Safety</button> </Link>
    </div>
  )
}

export default NotFound