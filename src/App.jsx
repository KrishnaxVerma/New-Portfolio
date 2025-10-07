import { useState } from 'react'
import FirstPage from "./components/FirstPage"
import Separator from './components/Separator'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Profiles from './components/Profiles'
function App() {
  return (
    <>
    <div className='font-poppins'>
      <FirstPage /> 
      <About /> 
      <Skills /> 
      <Project /> 
      <Contact /> 
      <Profiles /> 
    </div>
    </>
  )
}

export default App