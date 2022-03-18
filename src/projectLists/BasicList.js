import React from 'react'
import {prodAPI} from '../utils/api'
import { FaExternalLinkAlt } from 'react-icons/fa';
const BasicList = () => {



    const [projects, setProjects] = React.useState([]);
    const getProjects = async () => {
        const result = await fetch(prodAPI);
        const data = await result.json();
        setProjects(data.data.projects);
    }

    React.useEffect(() => {
        getProjects();
      
    },[])
   
    return (
        <div className="card-list">
        {projects.map((project, index) => {
            
            
            return (
                <article key={index} className="card">
                    <div className="img-container">
                    <img src={project.image} alt={project.name} />
                    <a className="card-link" href={project.link} target="_blank"><FaExternalLinkAlt /></a>
                    </div>
                   <div className="info-card">
                       <h4 className="card-title">{project.name}</h4>
                   </div>
                </article>

            )
        })}
        </div>
    )
}

export default BasicList
