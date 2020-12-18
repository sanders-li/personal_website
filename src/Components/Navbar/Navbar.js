import React from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="nav-wrap">
                <ul id="nav">
                    <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={1200} offset={-48}>Home</Link></li>
                    <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={1200} offset={-48}>About</Link></li>
                    <li><Link activeClass="active" to="experience" spy={true} smooth={true} duration={1200} offset={-48}>Experience</Link></li>
                    <li><Link activeClass="active" to="projects" spy={true} smooth={true} duration={1200} offset={-48}>Projects</Link></li>
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1200} offset={-48}>Contact</Link></li>
                </ul>
            </nav>
        )
    }
}