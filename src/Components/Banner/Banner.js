import React from 'react'
import { Link } from 'react-scroll'
import './Banner.css'

export default class Banner extends React.Component {
    render() {
        if (this.props.contact) {
            var socials = this.props.contact.socials.map(social => {
                return <li key={social.name}><a href={social.url} target="blank"><i className={this.props.icon_finder(social.name)}></i></a></li>
            })
        }
        return (
            <section id="home">
                <div className="banner">
                    <h1>Hi, I'm Sanders Li</h1>
                    <h2>I'm a Portland-based aerospace engineer, developer, and data scientist.</h2>
                    <hr></hr>
                    <ul className="socials">
                        {socials}
                    </ul>
                </div>
                
                <div className="overlay"></div>
                
                <p className="scroll-down">
                    <Link to="about" smooth={true} duration={1200} offset={-48} className="scroll-down"><i className="fas fa-caret-down"></i></Link>
                </p>
            </section>
        )
    }
}