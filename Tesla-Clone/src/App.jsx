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
        backgroundImg="/images/Model-Y.png"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Model 3"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/car2.png"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Model X"
        description="Order Online for Touch-less delivery"
        backgroundImg="/images/model-x.jpg"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Lower Cost Solar Panel in World"
        description="Money-back guarantee"
        backgroundImg="/images/solar-panel.jpg"
        OrderBtn="Order Now"
        ViewBtn="View Inventory"
      />

      <Section
        title="Accessories"
        description=""
        backgroundImg="/images/accessories.jpg"
        OrderBtn="Order Now"
        ViewBtn="View More!"
      />

      <Header />

    </div>
  )
}

export default App;