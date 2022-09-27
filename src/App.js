import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Now from './components/pages/Now'
import Projects from './components/pages/Projects'
import Version from './components/pages/Version'
import Navbar from './components/layout/Navbar/Navbar'
import { LayoutProvider } from './components/context/LayoutContext'
import Footer from './components/layout/Footer/Footer'
import GithubRedirect from './components/GithubRedirect'
import TwitterRedirect from './components/TwitterRedirect'
import Login from './components/pages/Login'

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
                    <Route path='/version' element={<Version />} />
                    <Route path='/github-redirect' element={<GithubRedirect />} />
                    <Route path='/twitter-redirect' element={<TwitterRedirect />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
                </div>
            </LayoutProvider>
            <Footer />
        </div>
    </Router>
    )
}

export default App