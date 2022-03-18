import React from 'react'
import {MdViewHeadline, MdOutlineDocumentScanner} from 'react-icons/md';
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsLinkedin,  BsGithub } from 'react-icons/bs';

const Navbar = () => {
    const buttons = document.querySelectorAll('.nav-elem')

    const scrollSmooth = () => {
        setIsOpen(false);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }
    React.useEffect(() => {
        buttons.forEach((button) => {
            button.addEventListener('click', () =>{
                setIsOpen(false);
               
            })
        })
        
        return () => {

        }
    },[])
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="navbar">
            <div className="logo">
                <h1>React Projects</h1>
            </div>
            <div className="openBtn" onClick={() => setIsOpen(true)}><MdViewHeadline/></div>
            <ul className={isOpen ? "navigation open" : "navigation" }>
               
                    <li className="nav-elem"><a href="#home" onClick={() =>  scrollSmooth()}>Home</a></li>
                    <li className="nav-elem"><a href="#smallProject" onClick={() =>  scrollSmooth()}>Basic projects</a></li>
                    <li className="nav-elem"><a href="#projects" onClick={() =>  scrollSmooth()}>Projects</a></li>
                    
                    <div className="closeBtn" onClick={() => setIsOpen(false)}><FaRegTimesCircle/></div>
            
            <ul className="social-icons">
                    <li className="social-elem"><a href="https://anastasiu-tudor.web.app/" target="_blank" className="resume"><MdOutlineDocumentScanner/></a></li>
                    <li className="social-elem"><a href="https://www.linkedin.com/in/tudor-anastasiu-02a1201b8/" target="_blank" className="linkedin"><BsLinkedin/></a></li>
                    <li className="social-elem"><a href="https://github.com/tudor1997" target="_blank" className="git"><BsGithub/></a></li>
            </ul>
            </ul>
         
        </div>
    )
}

export default Navbar
