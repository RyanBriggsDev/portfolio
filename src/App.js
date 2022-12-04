import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Now from './components/pages/Now'
import Projects from './components/pages/Projects'
import Version from './components/pages/Version'
import Navbar from './components/layout/Navbar/Navbar'
import { LayoutProvider } from './context/LayoutContext'
import Footer from './components/layout/Footer/Footer'
import Login from './components/pages/Login'
import BlogPosts from './components/pages/BlogPosts'
import CreatePost from './components/pages/CreatePost'

import GithubRedirect from './components/redirects/GithubRedirect'
import TwitterRedirect from './components/redirects/TwitterRedirect'
import YtsruhRedirect from './components/redirects/YtsruhRedirect'

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
                    <Route path='/login' element={<Login />} />
                    <Route path='/blog-posts' element={<BlogPosts />} />
                    <Route path='/create-post' element={<CreatePost />} />

                    <Route path='/github-redirect' element={<GithubRedirect />} />
                    <Route path='/twitter-redirect' element={<TwitterRedirect />} />
                    <Route path='/ytsruh-redirect' element={<YtsruhRedirect />} />

                </Routes>
                </div>
            </LayoutProvider>
            <Footer />
        </div>
    </Router>
    )
}

export default App