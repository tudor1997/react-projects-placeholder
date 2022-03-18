import React from 'react'
import presentation from './assets/presentation.svg'
const Presentation = () => {
    return (
        <section className="presentation" id="home">
            <div className="column">
                <h1>My React Projects
                    <div className="bar"></div>
                </h1>
                <p>Projects are the most practical way to learn any language, and <span>React</span> is no exception.</p>
            </div>
            <div className="column">
            <img src={presentation} alt="" />
            </div>
        </section>
    )
}

export default Presentation
