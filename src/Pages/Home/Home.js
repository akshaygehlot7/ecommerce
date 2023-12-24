import React from 'react'
// import Landing from "../../assets/Images/Landing Main Image.png";
import { Container } from "reactstrap";
import HeroSection from '../../Components/Herosection/HeroSection';
import FeatureProduct from '../../Components/FeatureProduct/FeatureProduct';
import Trusted from '../../Components/Trusted/Trusted';
import Services from '../../Components/Services/Services';
import OfferProducts from '../../Components/OfferProducts/OfferProducts';


const Home = () => {
  const data ={
    name: "Akshay store"
  }
  return (
    <div className='home'>
      <Container className="d-flex">
        <HeroSection myData={data}/>
        <FeatureProduct />
        <Services />
        <Trusted />
        <OfferProducts />
      </Container>
    </div>
  )
}

export default Home