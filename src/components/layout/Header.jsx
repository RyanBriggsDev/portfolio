import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <header>
      <h1>{props.headerText}</h1>
      <p>{props.headerDesc}</p>
      <Link to={props.to}><button className={`btn btn-primary`}>{props.btnText}</button></Link>
    </header>
  )
}

export default Header