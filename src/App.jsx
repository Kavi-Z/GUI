import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Food from './Components/Foods/Food'
import MidBody from './Components/MidBody/Mid'
import Slider from './Components/Slider/slider'
import Footer from './Components/Footer/footer'

const App = () => {

  return (
    <div>
       
      <Navbar />
      <Body />
      <MidBody/>
      <Food />
      <Slider />
    <Footer />
    </div>
  )
}

export default App