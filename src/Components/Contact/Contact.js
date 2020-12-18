import React from 'react'

import "./Contact.css"

export default class App extends React.Component {
    render() {
        if (this.props.contact && this.props.icon_finder) {
            var email = this.props.contact.email;
            var socials = this.props.contact.socials.map(social => {
                return <a href={social.url} target="blank"><i className={this.props.icon_finder(social.name)}></i><span></span>{social.url}</a>
            })
        }
        return (
            <section id="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <hr></hr>
                    <div className="contact-list">
                        <a href="mailto:sandersl@usc.edu" target="blank"><i className="fas fa-envelope"></i><span></span>{email}</a>
                        {socials}
                    </div>
                </div>
            </section>
        )
    }
}