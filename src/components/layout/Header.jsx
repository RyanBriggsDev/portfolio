import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {

  return (
    <header>
      <h1 className='hover-animation h1-header h1-span-header'>{props.headerText}</h1>
      <p className='hover-animation p-header'>{props.headerDesc}</p>
      <Link to={props.to}><button className={`btn btn-primary`}>{props.btnText}</button></Link>
    </header>
  )
}

export default Header