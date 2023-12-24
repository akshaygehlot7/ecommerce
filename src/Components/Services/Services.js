import React from 'react'
import { Col, Row } from 'reactstrap'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity, MdOutlinePayments } from "react-icons/md";
import { GrMoney } from "react-icons/gr";



const Services = () => {
  return (
    <Row>
        <Col>
        <div className="mb-24">
        <div className="items-center justify-center flex h-96 gap-x-8 gap-10">
          <div className="flex flex-col justify-center rounded-lg	h-32 w-80 bg-slate-300 shadow-lg shadow-slate-500/50">
            <div>
              <TbTruckDelivery className="text-blue-600/100 h-16 w-auto"/>
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col justify-center rounded-lg	h-32 w-80 bg-slate-300 shadow-lg shadow-slate-500/50">
              <div className='flex items-center'>
                <MdOutlineSecurity className="mr-4 text-blue-600/100 h-8 w-auto"/>
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-lg	h-32 mt-20 w-80 bg-slate-300 shadow-lg shadow-slate-500/50 ">
              <div className='flex items-center'>
                <GrMoney className="mr-4 text-blue-600/100 h-8 w-auto" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-lg	h-32 w-80 bg-slate-300 shadow-lg shadow-slate-500/50">
            <div>
              <MdOutlinePayments className="text-blue-600/100 h-16 w-auto" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>
        </div>
      </div>
        </Col>
    </Row>
    )
}

export default Services