import React from 'react'

import './Experience.css';

export default class Experience extends React.Component {
    render() {
        if (this.props.education && this.props.career) {
            var education = this.props.education.map(value => {
                return (
                    <div className="entry"> 
                        <h4>{value.name}</h4>
                        <p className="info">{value.degree} in {value.major}<span>&bull;</span><em className="date">{value.start_date} - {value.end_date}</em></p>
                        <p>{value.school}</p>
                    </div>
                )
            });
            var career = this.props.career.map(value => {
                return (
                    <div className="entry"> 
                        <h4>{value.name}</h4>
                        <p className="info">{value.role}<span>&bull;</span><em className="date">{value.start_date} - {value.end_date}</em></p>
                        <p>{value.summary}</p>
                        <ul>
                            {value.achievements.map(achievement => {
                                return <li>{achievement}</li>
                            })}
                        </ul>
                    </div>
                )
            });
            var skills = this.props.skills.map(category => {
                return (
                    <div className="category">
                        <h4>{category.category}</h4>
                        {category.skills_list.map(skill => {
                            return <p>{skill}</p>
                        })}
                    </div>
                )
            })
        };
        return (
            <section id="experience">
                <div className="container-header">
                    <h2>Experience</h2>
                    <hr></hr>
                </div>
 
                <div id="education" className="container outer">
                    <h3>Education</h3>
                    <div className="container inner">
                        {education}
                    </div>
                </div>
                
                <div className="container-header">
                    <hr></hr>
                </div>
                
                <div id="career" className="container outer">
                    <h3>Career</h3>
                    <div className="container inner">
                        {career}
                    </div>
                </div>

                <div className="container-header">
                    <hr></hr>
                </div>

                 <div id="skills" className="container outer">
                     <h3>Skills</h3>
                     <div className="container category">
                         {skills}
                     </div>
                 </div>
            </section>
        )
    }
}