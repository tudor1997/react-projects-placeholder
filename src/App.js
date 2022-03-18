import React from 'react'

// pages & components
import Navbar from './Navbar'
import Presentation from './Presentation'
import BasicProjects from './BasicProjects'
import LargeProjects from './LargeProjects'
import ScrollUp from './scrollUp'

// context
import { ScrollProvider } from './context/scrollContext'
import { FirebaseProvider } from './context/firebase'

const App = () => {
  return ( 
    <FirebaseProvider>
        <ScrollProvider>
       <Navbar />
       <ScrollUp />
      <Presentation></Presentation>
      <BasicProjects></BasicProjects>
      <LargeProjects/>
  </ScrollProvider>
    </FirebaseProvider>

   
  )
}

export default App
