import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ProjectGallery from './pages/ProjectGallery'
import Contact from './pages/Contact'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectgallery" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

// nice to haves in future:
// fix save button in the work day scheduler - after the first time it doesn't go hide after 2 secs
// change urls in project gallery so just the name instead?
// improve CSS of hyperlinks in contacts page being blue and underlined
// work out how to use Netlify forms with React https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#step-2
// clear form input when navigate back to the page after submitting contact details
