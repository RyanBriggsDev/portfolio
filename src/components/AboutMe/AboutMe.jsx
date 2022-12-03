import { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

let data = require('../../data/aboutMe.json')

function AboutMe() {

  const [aboutMeText, setAboutMeText] = useState(data.descriptions.fairlyShort)

  useEffect(() => {
  }, [aboutMeText])

  return (
    <div className='about-me'>
      <SectionTitle text='Learn a bit, or a lot, about me' />
      <div className="desc-option-div">
        <div className={`btn-circle ${aboutMeText === data.descriptions.short ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(data.descriptions.short)}></div>
        <div className={`btn-circle ${aboutMeText === data.descriptions.fairlyShort ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(data.descriptions.fairlyShort)}></div>
        <div className={`btn-circle ${aboutMeText === data.descriptions.long ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(data.descriptions.long)}></div>
        <div className={`btn-circle ${aboutMeText === data.descriptions.longAf ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(data.descriptions.longAf)}></div>
      </div>
      <p>{aboutMeText}</p>
    </div>
  )
}

export default AboutMe