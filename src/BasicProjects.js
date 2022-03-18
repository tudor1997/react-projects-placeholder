import React from 'react'
import BasicList from './projectLists/BasicList'
const BasicProjects = () => {
    
   
    return (
        <section className="basic-projects-section" id="smallProject">
                <h1>
                    Basic Projects
                    <div className="bar"></div>
                </h1>
               
                    <BasicList></BasicList>
                
        </section>
    )
}



export default BasicProjects
