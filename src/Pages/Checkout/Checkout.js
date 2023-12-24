import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Button from "../../Components/Button/Button";
import FormatPrice from "../../Components/FormatPrice/FormatPrice";
import { useCartContext } from "../../context/cart_context";
import { NavLink } from "react-router-dom";


const Checkout = () => {
  const { total_price, shipping_fee } = useCartContext();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  return (
    <Container>
      <Row className="grid justify-center">
        <div className="grid gap-x-8 gap-y-8 grid-cols-2 w-11/12">
        <Col lg="8" md="6" className="grid justify-center text-center">
          <h6 className="mb-4">Shipping Address</h6>
          <form className="form mb-5" onSubmit={submitHandler}>
            <div className="form__group mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form__group mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="email"
                placeholder="Emter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form__group mb-6 mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="number"
                placeholder="Phone Number"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form__group mb-6 mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="text"
                placeholder="street"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="form__group mb-6 mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form__group mb-6 mt-4">
              <input
                className="w-72 bg-transparent border-b-2 border-black px-8 py-4"
                type="number"
                placeholder="Postal Code"
                required
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Col>

        <Col lg="4" md="6">
          {/* order total_amount */}
          <div className="flex items-center w-full m-8 capitalize  flex-col ">
            <div className="w-96 h-72 bg-slate-200  flex flex-col p-12 gap-x-8">
              <div className="flex mb-2 justify-center">
                <h2 className="text-xl">Order Summery</h2>
              </div>
              <div className="flex justify-between mb-3">
                <p>subtotal:</p>
                <p>
                  <FormatPrice price={total_price} />
                </p>
              </div>
              <div className="flex justify-between mb-3">
                <p>shipping fee:</p>
                <p>
                  <FormatPrice price={shipping_fee} />
                </p>
              </div>
              <hr />
              <div className="flex justify-between w-72 mt-1 mb-4">
                <p>order total:</p>
                <p>
                  <FormatPrice price={shipping_fee + total_price} />
                </p>
              </div>
              <div className="flex justify-start mb-2">
                <p>Estimated shipping time: 3 days</p>
              </div>
              <div className="flex justify-center ">
                <NavLink to="/">
                  <Button>Go to Payment</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </Col>
        </div>
      </Row>
    </Container>
  );
};

export default Checkout;
