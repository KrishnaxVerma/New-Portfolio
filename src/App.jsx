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
      <FirstPage /> <Separator />
      <About /> <Separator />
      <Skills /> <Separator/>
      <Project /> <Separator />
      <Contact /> 
      <Profiles /> <Separator />
    </div>
    </>
  )
}

export default App