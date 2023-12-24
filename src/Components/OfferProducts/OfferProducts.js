import React from "react";
import { Col, Container, Row } from "reactstrap";
import { useProductContext } from "../../context/productcontex";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSolidTimer } from "react-icons/bi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiShootingStarLight } from "react-icons/pi";

import Product from "../Product/Product";

const OfferProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>.....Loading</div>;
  }
  return (
    <Container>
      <Row>
        <Col>
          <div className="mb-24 justify-center bg-slate-100">
            <div className="items-center justify-center flex h-96 gap-x-8 gap-10">
              <div className="flex flex-col justify-center rounded-lg	h-32 w-80 hover:bg-slate-300 shadow-lg shadow-slate-500/50">
                <div className="flex items-center w-11/12 h-12">
                  {/* <TbTruckDelivery className="text-blue-600/100 h-16 w-auto" /> */}
                  <BiSolidTimer className="text-blue-600/100 h-16 w-auto" />
                  <h3>Quick and Easy Store Pickup</h3>
                </div>
              </div>

              <div className="flex flex-col justify-center rounded-lg	h-32 w-80 hover:bg-slate-300 shadow-lg shadow-slate-500/50">
                <div className="flex items-center w-11/12 h-12">
                  {/* <MdOutlineSecurity className="mr-4 text-blue-600/100 h-8 w-auto" /> */}
                  <LiaShippingFastSolid className="text-blue-600/100 h-16 w-auto" />
                  <h3>Free shipping over $35</h3>
                </div>
              </div>
              {/* <div className=""> */}
              <div className="flex flex-col justify-center rounded-lg	h-32 w-80 hover:bg-slate-300 shadow-lg shadow-slate-500/50 ">
                <div className="flex items-center w-11/12 h-12">
                  {/* <GrMoney className="mr-4 text-blue-600/100 h-8 w-auto" /> */}
                  <HiOutlineCurrencyDollar className="text-blue-600/100 h-16 w-auto" />
                  <h3>Low Price Guarantee</h3>
                </div>
              </div>
              {/* </div> */}

              <div className="flex flex-col justify-center rounded-lg	h-32 w-80 hover:bg-slate-300 shadow-lg shadow-slate-500/50">
                <div className="flex items-center w-11/12 h-12">
                  {/* <MdOutlinePayments className="text-blue-600/100 h-16 w-auto" /> */}
                  <PiShootingStarLight className="text-blue-600/100 h-16 w-auto"/>
                  <h3>Latest and Greatest Tech</h3>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default OfferProducts;
