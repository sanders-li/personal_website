import React from 'react'

import './About.css';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="profile">
                        <div className="profile-frame">
                            <img id="profile-img" src="./headshot.png" alt="Sanders Li"></img>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>About Me</h3>
                        <p>{this.props.about}</p>
                    </div>
                    <div className="download">
                        <a className="button" href="https://www.dropbox.com/s/cma8tuabmrgri5w/Sanders_Li_Resume_CS.pdf?dl=0" download><i className="fas fa-download"></i>Download Resume</a>
                    </div>
                </div>
            </section>
        )
    }
}