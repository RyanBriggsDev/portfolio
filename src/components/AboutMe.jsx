import { useState, useEffect } from 'react'
import SectionTitle from '../components/SectionTitle'

let data = require('../data/aboutMe.json')

function AboutMe() {

  const [aboutMeText, setAboutMeText] = useState(data.descriptions.fairlyShort)

  useEffect(() => {

  }, [aboutMeText])

  return (
    <div className='about-me'>
      <SectionTitle text='Learn a bit, or a lot, about me' />
      <div className="desc-option-div">
        <div className='btn-circle' onClick={() => setAboutMeText(data.descriptions.short)}></div>
        <div className='btn-circle' onClick={() => setAboutMeText(data.descriptions.fairlyShort)}></div>
        {/* <div className='btn-circle' onClick={() => setAboutMeText(data.descriptions.long)}></div> */}
        {/* <div className='btn-circle' onClick={() => setAboutMeText(data.descriptions.longAf)}></div> */}
      </div>
      <p>{aboutMeText ? aboutMeText : `Hi! I'm Ryan. I'm currently living in the North West UK. I use React JS to make beautiful frontend applications.`}</p>
    </div>
  )
}

export default AboutMe