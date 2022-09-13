import Header from '../layout/Header'

function Version() {


  return (
    <div className='content-grid'>
        <Header 
            headerText={`Current Version`} 
            headerDesc="Version 1.0.0"
            btnText=''
            to=''
            display='none'
        />
        <ul className='version-history'>
            <li>
                <h2>Version: 1.0.0</h2>
                <p><strong>Update History: </strong>First version of the portfolio. Updating and adding new features over time as I learn.</p>
            </li>
        </ul>
    </div>
  )
}

export default Version