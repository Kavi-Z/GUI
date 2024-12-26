import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body'
import Food from './Components/Foods/Food'
import MidBody from './Components/MidBody/Mid'
import Slider from './Components/Slider/slider'
import Footer from './Components/Footer/footer'
import Title from './Components/Title/Title'
import Login from './Components/LoginPage/login'

const App = () => {
  let cur;

  switch (window.location.pathname) {
    case "/Login":
      cur = <Login />;
      break;
    default:
      cur = (
        <>
         <Navbar />
          <Body />
          <MidBody />
          <div className="container">
            <Title />
          </div>
          <Food />
          <Slider />
         
          <Footer />
        </>
      );
      break;
  }

  return (
    <>
      <div>
       
        {cur}
        
      </div>
    </>
  );
};

export default App;
