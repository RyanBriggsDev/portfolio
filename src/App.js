import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Now from './components/pages/Now'
import Projects from './components/pages/Projects'
import Navbar from './components/layout/Navbar/Navbar'
import { LayoutProvider } from './components/context/LayoutContext'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <Router>
        <div className="page-layout">
            <LayoutProvider>
                <Navbar />
                <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/notfound' element={<NotFound />} />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/now' element={<Now />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
                </div>
            </LayoutProvider>
            <Footer />
        </div>
    </Router>
    )
}

export default App