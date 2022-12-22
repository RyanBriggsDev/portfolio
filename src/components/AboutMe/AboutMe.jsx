import { useState, useEffect } from 'react'
import SectionTitle from '../SectionTitle'

// let data = require('../../data/aboutMe.json')

function AboutMe() {

  const one = `Hi, I’m Ryan. I make websites 👨‍💻.` 
  const two = `Hi, I’m Ryan. In my spare time, I've taught myself to make websites.`
  const three = `Hi, I’m Ryan. I’m a self taught junior web-developer in my spare time. I use react JS to make beautiful front end applications.`
  const four = (
    <>
      <p>Hi, I’m Ryan. I’m a self taught junior web-developer in my spare time, outside of my full time job. I use React JS to make beautiful front end applications.</p>
      {/* <ul>
        <li>🌍 I'm based in Warrington, UK</li>
        <li>🖥️ See my portfolio at ryanbriggs.dev</li>
        <li>🖥️ See my portfolio at ryanbriggs.dev</li>
        <li>✉️ You can contact me at r@ryanbriggs.dev</li>
        <li>🚀 I'm currently working on Wrongmove | A Rightmove Clone</li>
        <li>🧠 I'm learning React.js / Next.js</li>
        <li>🤝 I'm open to collaborating on Interesting Projects & Open Source</li>
        <li>⚡ Everyone thinks I'm weird for liking gardening</li>
      </ul> */}
    </>
  )
  const five = (
    <>
      <p>I'm a self taught Front End Web Developer currently doing freelance work whilst looking for the right full time role.</p>
      <p>I currently live in Warrington, UK, where I work at a training centre.</p>
      <ul>
        <h3>Since I started coding at the beginning of 2022 I've learnt</h3>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>Javascript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Firebase</li>
      </ul>
      <ul>
        <h3>And have learned valueable skills like:</h3>
        <li>Git/Github</li>
        <li>NPM</li>
        <li>APIs</li>
      </ul>
    </>
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
      <div className='flex gap-1 dir-col'>
        {aboutMeText}
      </div>
    </div>
  )
}

export default AboutMe