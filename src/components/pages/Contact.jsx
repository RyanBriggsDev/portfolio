import React from 'react'
import ContactCard from '../layout/ContactCard'
import Header from '../layout/Header'
import { useState } from 'react'

function Contact() {

  return (
    <div>
          <Header headerText={`Get in Touch`} 
                headerDesc="Contact me on any of the below. If you want a faster reply, use Twitter."
                btnText='Twitter'
                to='/twitter-redirect'
                display='none'
          />
          <ContactCard />
    </div>
  )
}

export default Contact