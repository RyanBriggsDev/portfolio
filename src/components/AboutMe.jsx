import React from 'react'
import { useState } from 'react'

let data = require('../data/aboutMe.json')

function AboutMe() {

  const [aboutMeText, setAboutMeText] = useState(data.descriptions.fairlyShort)

  return (
    <div className='about-me'>
      <h2>Learn a bit about me, or a lot about me.</h2>
      <p>{aboutMeText}</p>
      <div className="desc-option-div">
        <button className='btn mr-1' onClick={() => setAboutMeText(data.descriptions.short)}>Short</button>
        <button className='btn mr-1' onClick={() => setAboutMeText(data.descriptions.fairlyShort)}>Fairly Short</button>
        <button className='btn mr-1' onClick={() => setAboutMeText(data.descriptions.long)}>Long</button>
        <button className='btn mr-1' onClick={() => setAboutMeText(data.descriptions.longAf)}>Long Af</button>
      </div>
    </div>
  )
}

export default AboutMe