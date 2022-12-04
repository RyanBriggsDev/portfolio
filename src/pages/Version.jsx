import Header from '../components/layout/Header'
import SectionTitle from '../components/SectionTitle'

function Version() {


  return (
    <div className='content-grid'>
        <Header 
            headerText={`Current Version`} 
            headerDesc="Version 1.2.0"
            btnText=''
            to=''
            display='none'
        />
        <ul className='version-history'>
            <li>
                <SectionTitle text='Version: 1.0.3' />
                <p><strong>Update Notes: </strong>Added 'skills' component and section on homepage.</p>
            </li>
            <li>
                <SectionTitle text='Version: 1.0.3' />
                <p><strong>Update Notes: </strong>Carried out a refactor of code file structure to make app easier to work on.</p>
            </li>

            <li>
                <SectionTitle text='Version: 1.0.1' />
                <p><strong>Update Notes: </strong>Re-evaluated home cards section as I wasn't happy with how they looked. Removed GitHub API for this section as it didn't give me the flexibility I wanted.</p>
            </li>
            <li>
                <SectionTitle text='Version: 1.0.0' />
                <p><strong>Update Notes: </strong>First version of the portfolio. Updating and adding new features over time as I learn.</p>
            </li>
        </ul>
    </div>
  )
}

export default Version