import { useState } from 'react'
import FirstPage from "./components/FirstPage"
import Separator from './components/Separator'
import About from './components/About'
import Skills from './components/Skills'
import Project from './components/Project'
function App() {
  return (
    <>
    <div className='font-poppins'>
      <FirstPage /> <Separator />
      <About /> <Separator />
      <Skills /> <Separator/>
      <Project /> <Separator />
      <h1 className="text-3xl font-bold underline h-screen">
        Hello world!
      </h1>
    </div>
    </>
  )
}

export default App