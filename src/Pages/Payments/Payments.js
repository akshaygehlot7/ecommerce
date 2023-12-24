import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { useCartContext } from '../../context/cart_context';
import FormatPrice from '../../Components/FormatPrice/FormatPrice';
import { NavLink } from 'react-router-dom';
import Button from '../../Components/Button/Button';

const Payments = () => {
    const { total_price, shipping_fee } = useCartContext();

  return (
    <Container>
        <Row>
        <div className="grid gap-x-8 gap-y-8 grid-cols-2 w-11/12">
        <Col lg="8" md="6" className="grid justify-center text-center">
          <h6 className="mb-4">Shipping Address</h6>
          <div className="flex items-center w-full m-8 capitalize  flex-col ">
            <div className="w-96 h-72 bg-slate-200  flex flex-col p-12 gap-x-8">
              <div className="flex mb-2 justify-center">
                <h2 className="text-xl">Order Summery</h2>
              </div>
              <div className="flex justify-between mb-3">
                <p>subtotal:</p>
                
              </div>
              <div className="flex justify-between mb-3">
                <p>shipping fee:</p>
              </div>
              <hr />
              <div className="flex justify-between w-72 mt-1 mb-4">
                <p>order total:</p>
              </div>
              <div className="flex justify-start mb-2">
                <p>Estimated shipping time: 3 days</p>
              </div>
              <div className="flex justify-center ">
                <NavLink to="">
                  <Button>Advance Payment</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </Col>

            {/* order summery  */}
            <Col lg="4" md="6">
          <div className="flex items-center w-full m-8 capitalize  flex-col ">
            <div className="w-96 h-72 bg-slate-200  flex flex-col p-12 gap-x-8">
              <div className="flex mb-2 justify-center">
                <h2 className="text-xl">Order Summery</h2>
              </div>
              <div className="flex justify-between mb-3">
                <p>subtotal:</p>
                <p>
                  <FormatPrice price={total_price} />
                  {/* price={total_price} */}
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p>shipping fee:</p>
                <p>
                  <FormatPrice price={shipping_fee} />
                  {/* price={shipping_fee} */}
                </p>
              </div>
              <hr />
              <div className="flex justify-between w-72 mt-1 mb-4">
                <p>order total:</p>
                <p>
                  <FormatPrice price={shipping_fee + total_price} />
                  {/* price={shipping_fee + total_price} */}
                </p>
              </div>
              <div className="flex justify-start mb-2">
                <p>Estimated shipping time: 3 days</p>
              </div>
              {/* <div className="flex justify-center ">
                <NavLink to="">
                  <Button>Go to Payment</Button>
                </NavLink>
              </div> */}
            </div>
          </div>
        </Col>
        </div>
        </Row>
    </Container>
  )
}

export default Payments