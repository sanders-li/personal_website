import React from 'react'
import axios from 'axios'

import './App.css';
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import About from '../About/About'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.icon_finder = this.icon_finder.bind(this)
  };

  componentDidMount() {
    axios.get('./resume.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
      }).then(res => {
        console.log(res.data)
        this.setState(res.data)
      }).catch(err => {
        console.log(err)
        return {}
    })
  }

  icon_finder = (name) => {
    switch(name) {
        case "LinkedIn": return "fab fa-linkedin"
        case "Github": return "fab fa-github"
        case "Twitter": return "fab fa-twitter"
        default: return ''
      }
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner contact={this.state.contact} icon_finder={this.icon_finder} />
        <About about={this.state.bio} />
        <Experience education={this.state.education} career={this.state.experience} skills={this.state.skills} />
        <Projects projects={this.state.projects} />
        <Contact contact={this.state.contact} icon_finder={this.icon_finder} />
        <Footer />
      </div>
    );
  }
}
