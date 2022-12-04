import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/layout/Navbar/Navbar'
import { LayoutProvider } from './context/LayoutContext'

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Now from './pages/Now'
import Projects from './pages/Projects'
import Version from './pages/Version'
import BlogPosts from './pages/BlogPosts'
import CreatePost from './pages/CreatePost'
import Footer from './components/layout/Footer/Footer'
import Login from './pages/Login'

    // Redirects
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