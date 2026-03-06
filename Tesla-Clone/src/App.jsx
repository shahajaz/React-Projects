import React from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Section from "./components/Section"


const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      
      <Section />
      <Section />
      <Section />
      <Section />
    </div>
  )
}

export default App;
