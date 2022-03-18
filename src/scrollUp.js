import React from 'react'
import { BsFileArrowUpFill } from 'react-icons/bs'
import { ScrollContext } from './context/scrollContext'


const ScrollUp = () => {

    const {height} = React.useContext(ScrollContext);

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
    }
    return (
        <button type="button" className={height > 100 ? 'scrollUp' : 'scrollUp invisible'} onClick={() => scrollUp()}><BsFileArrowUpFill/></button>
    )
}

export default ScrollUp
