import Header from '../layout/Header'

function Home(props) {
  return (
    <Header headerText={`👋 Hi. I'm Ryan`} 
            headerDesc="I'm a Self Taught Front End Web Developer 👨‍💻"
            btnText='View My Projects'
    />
  )
}

export default Home