import React from 'react'

import './Projects.css'

export default class Projects extends React.Component {
    render() {
        if (this.props.projects) {
            var projects = this.props.projects.map(project => {
                var background_style = `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1) ), url(${project.image}) no-repeat`;
                return (
                    <article className="card" style={{background: background_style, backgroundSize: 'cover', backgroundPosition: '33%'}}>
                        <div className="link">
                            <a href={project.link} target="blank"><i className="fas fa-link"></i></a>
                        </div>
                        <header className="card-header">
                            <h5>{project.name}</h5>
                        </header>
                        <div className="card-detail">
                            <p>{project.description}</p>
                        </div>
                        <div className="card-labels">
                            {project.techstack.map(value => { return <p className="labels">{value}</p>})}
                        </div>
                    </article>
                )
            })
            projects.push(<div className="barrier"></div>)
        }
        return (
            <section id="projects">
                <div className="container-header">
                    <h2>Projects</h2>
                    <hr></hr>
                </div>
                <div className={'card-list'}>
                    {projects}
                </div>
                
            </section>
        )
    }
}