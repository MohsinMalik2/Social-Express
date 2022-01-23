import React, { Component} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import News from './components/News'
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress:0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  // c = "John";
  render() {
    

    return (
      <div>
        {/* This is my first Class Based COmponent {this.c} */}
        <Router>

        <NavBar/>
        <LoadingBar
        height={5}
        color='#0d6efd'
        progress={this.state.progress}
      />
          <Routes>
              <Route path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={15} country={"us"} category={"general"}/>}>
                 
              </Route>
              <Route path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={15} country={"us"} category={"business"}/>}>
                  
              </Route>
              <Route path="/entertainment" element={ <News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={15} country={"us"} category={"entertainment"}/>}>
                 
              </Route>
              <Route path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={15} country={"us"} category={"health"}/>}>
                  
              </Route>
              <Route path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={15} country={"us"} category={"science"}/>}>
                  
              </Route>
              <Route path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={15} country={"us"} category={"sports"}/>}>
                  
              </Route>
              <Route path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={15} country={"us"} category={"technology"}/>}>
                  
              </Route>   
          </Routes>
          <Footer/>

        </Router>
        
      </div>
    )
  }
}

