import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import NotFound from './components/pages/NotFound'
import Navbar from './components/Navbar/Navbar'
import { LayoutProvider } from './components/context/LayoutContext'
import Header from './components/layout/Header'

function App() {
  return (
    <Router>
        <LayoutProvider>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <Navbar />
            <Header />
        </LayoutProvider>
    </Router>
    )
}

export default App