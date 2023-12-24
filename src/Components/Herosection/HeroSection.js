import React from "react";
import { Col, Row } from "reactstrap";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  const { name } = myData;
  return (
    <>
      <Row>
        <Col>
          <div className="container mb-12">
            <div className="flex justify-center items-center">
              <div className="w-3/6">
                <p className="mb-4 text-xl text-blue-600/100">Welcome to </p>
                <h1 className="text-2xl"> {name} </h1>
                <p className="mb-6">
                  Mobile commerce is a large subset of electronic commerce, a
                  model where firms or individuals conduct business over the
                  Internet. As of 2023, nearly 97% of Americans own a cell
                  phone, and 85% of them owned a smartphone. This is up from 35%
                  in 2011. 1 Zippia. "25+ Incredible US Smartphone Industry
                  Statistics [2023]: How Many Americans Have Smartphoness." Many
                  products and services can be transacted via m-commerce,
                  including banking, investing, and purchases of books, plane
                  tickets, and digital music. The rapid growth of mobile
                  commerce has been driven by several factors, including
                  increased wireless handheld device computing power, a
                  proliferation of m-commerce applications, and the resolution
                  of security issues.
                </p>
                <NavLink to="/products">
                <Button>show now</Button>
                </NavLink>
              </div>
              {/* our homepage image  */}
              <div className="hero-section-image">
                <div className="items-center inline-flex relative flex-[0_0_auto]">
                  <img
                    className="w-60 h-60"
                    src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default HeroSection;
