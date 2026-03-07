import React from 'react'
import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="App">

      <Header />
      <Home />

      <Section
        title="Model S"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/car1.png"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Model Y"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/Model-Y.jfif"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Model 3"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/model-y.jpg"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/car3.png"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

    </div>
  )
}

export default App;