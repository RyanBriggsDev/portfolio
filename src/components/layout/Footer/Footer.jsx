import './footer.scss'

function Footer() {

  const year = new Date().getFullYear()

  return (
    <footer>
        <div>
            <p><a href="https://ryanbriggs.dev">ryanbriggs.dev</a></p>
            <p>© <a href="https://github.com/ryanbriggsdev">Ryan Briggs</a> {year}</p>
        </div>
    </footer>
  )
}

export default Footer