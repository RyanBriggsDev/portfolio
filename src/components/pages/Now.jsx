import Header from '../layout/Header'

function Now() {
  return (
    <div className="content-grid">
        <Header 
          headerText={`Now - in 2022`} 
          headerDesc="What I'm currently working on, and what I hope to work on soon."
          btnText='View GitHub Projects'
          to='/github-redirect'
          display=''
        />
        <div className="now-layout">
          <div className="now-left">
            <h2>Current</h2>
            <ul>
              
              <li style={{color: 'green'}}>- HTML + CSS</li>
              <li style={{color: 'green'}}>- Git/Github</li>
              <li style={{color: 'green'}}>- Javascript</li>
              <li style={{color: 'green'}}>- APIs</li>
              <li style={{color: 'green'}}>- React Front to Back Course by Brad Traversy</li>
              <li style={{color: 'green'}}>- React House Marketplace</li>
              <li style={{color: 'green'}}>- Remake Pokedex in React</li>
              <li style={{color: 'green'}}>- Firebase</li>
              <li style={{color: 'white'}}>- Update/Improve Portfolio</li>
              <li style={{color: 'white'}}>- Trello Remake</li>
            </ul>
          </div>
          <div className="now-right">
            <h2>Plans</h2>
            <ul>
              <li style={{color: 'white'}}>- Spotify Remake built in React using the Spotify API.</li>
              <li style={{color: 'white'}}>- PDF certificate generation app + training database with React/Firebase.</li>
              <li style={{color: 'white'}}>- MERN Stack.</li>
              <li style={{color: 'white'}}>- Make my code cleaner.</li>
              <li style={{color: 'white'}}>- Contribute to open source and work with other developers.</li>
              <li style={{color: 'white'}}>- Advanced CSS.</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Now