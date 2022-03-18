import React from 'react'

// pages & components
import Navbar from './Navbar'
import Presentation from './Presentation'
import BasicProjects from './BasicProjects'

import ScrollUp from './scrollUp'

// context
import { ScrollProvider } from './context/scrollContext'


const App = () => {
  return ( 
        <ScrollProvider>
       <Navbar />
       <ScrollUp />
      <Presentation></Presentation>
      <BasicProjects></BasicProjects>
  </ScrollProvider>

   
  )
}

export default App
