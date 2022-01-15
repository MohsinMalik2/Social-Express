import React, { Component } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {
  // c = "John";
  render() {
    return (
      <div>
        {/* This is my first Class Based COmponent {this.c} */}
        
        <NavBar/>
        <News/>
        <Footer/>
      </div>
    )
  }
}

