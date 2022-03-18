import React from 'react'
import { FirebaseContext } from '../context/firebase'; 
import {ref, child, get} from 'firebase/database'
import { FaExternalLinkAlt } from 'react-icons/fa';

const BasicList = () => {

    const {database} = React.useContext(FirebaseContext);

    const [projects, setProjects] = React.useState([]);
    const dbRef = ref(database)
    console.log(projects);
    React.useEffect(() => {
        get(child(dbRef, 'react-projects/big-projects')).then((snapshot) =>{
            if(snapshot.exists()) {
                const bigProjects = setProjects(snapshot.val());
                
                return bigProjects
            }else{
                console.log("No data  available");
            }
        }).catch((error) => {
            console.error(error);
        })
        return () => {

        }
    },[dbRef])
   
    return (
        <div className="card-list">
        {projects.map((project, index) => {
        
            
            return (
                <article  key={index}  className="card">
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
