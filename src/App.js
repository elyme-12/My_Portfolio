import React from 'react';
import Home from "./components/LandingPage/Home";
import Contact from "./components/LandingPage/Contact";
import About from "./components/LandingPage/About";
import Skills from "./components/LandingPage/Skills";
import Projects from "./components/LandingPage/Projects";



const App = () => {
    return (
        <div>
            <nav>
                <ul className="navi">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#project">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="home">
                <Home />
            </div>
            <div className="about">
                <About />
            </div>
            <div className="skills" >
                <Skills />
            </div>
            <div className="projects" >
                <Projects />
            </div>
            <div className="contact" id="section">
                <Contact />
            </div>
        </div>
    );
};


export default App;