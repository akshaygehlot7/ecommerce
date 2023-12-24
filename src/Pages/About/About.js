import React, { useContext } from 'react'
import HeroSection from '../../Components/Herosection/HeroSection'
import Services from '../../Components/Services/Services'
// import { AppContext } from '../../context/productcontex'

const About = () => {
  // const myName = useContext(AppContext);

  const data ={
    name: "Akshay Ecommerce"
  }
  return (
    <div>
      {/* {myName} */}
      <div><HeroSection myData={data} /></div>
      <div><Services /></div>
    </div>
  )
}

export default About