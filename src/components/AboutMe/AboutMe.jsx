import { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

// let data = require('../../data/aboutMe.json')

function AboutMe() {

  const one = `Hi, I’m Ryan. I make websites 👨‍💻.`
  const two = `Hi, I’m Ryan. In my spare time, I've taught myself to make websites.`
  const three = `Hi, I’m Ryan. I’m a self taught junior web-developer in my spare time. I use react JS to make beautiful front end applications.`
  const four = `Hi, I’m Ryan. I’m a self taught junior web-developer in my spare time, outside of my full time job. I use React JS to make beautiful front end applications.`
  const five = (
    <div>
      <p>I'm a self taught, enthusiastic and motivated Front End Web Developer currently doing freelance work whilst looking for the right full time role.</p>
    </div>
  )

  const [aboutMeText, setAboutMeText] = useState(two)

  useEffect(() => {
  }, [aboutMeText])

  return (
    <div className='about-me'>
      <SectionTitle text='Learn a bit, or a lot, about me' />
      <div className="flex f-start f-row">
        <div className={`btn-circle p-1 ${aboutMeText === one ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(one)}></div>
        <div className={`btn-circle p-1 ${aboutMeText === two ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(two)}></div>
        <div className={`btn-circle p-1 ${aboutMeText === three ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(three)}></div>
        <div className={`btn-circle p-1 ${aboutMeText === four ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(four)}></div>
        <div className={`btn-circle p-1 ${aboutMeText === five ? 'btn-circle-selected' : ''}`} onClick={() => setAboutMeText(five)}></div>
      </div>
      {aboutMeText}
    </div>
  )
}

export default AboutMe