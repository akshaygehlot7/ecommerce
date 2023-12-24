import React from "react";
import { useCartContext } from "../../context/cart_context";
import { Col, Row } from "reactstrap";
import Button from "../../Components/Button/Button";
import { NavLink } from "react-router-dom";
import CartItems from "../../Components/Ui/CartItems/CartItems";
import FormatPrice from "../../Components/FormatPrice/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="grid place-items-center h-96">
        <h3 className="font-medium capitalize">Your Cart is Empty</h3>
        <NavLink to="/products">
          <Button> continue Shopping </Button>
        </NavLink>
      </div>
    );
  }
  return (
    <Row className="flex justify-center">
      <div className="grid gap-x-8 gap-y-8 grid-cols-2 w-11/12">
        <Col>
          <div className="container">
            <div className="">
              <div className="grid text-center uppercase grid-five-column">
                <p>Item</p>
                <p className="cart-hide">Price</p>
                <p>Quantity</p>
                <p className="w-80">Subtotal</p>
                <p>Remove</p>
              </div>
              <hr className="mt-4" />
              <div className="p-12 flex flex-col gap-x-16">
                {cart.map((curElem) => {
                  return <CartItems key={curElem.id} {...curElem} />;
                })}
              </div>
            </div>
          </div>
        </Col>
        <Col>
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
              <div className="flex justify-center ">
                <NavLink to="/checkout">
                  <Button>checkout</Button>
                </NavLink>
              </div>
            </div>
          </div>

          <hr />
          <div className="mt-8 flex justify-between">
            <NavLink to="/products">
              <Button> continue Shopping </Button>
            </NavLink>
            <Button onClick={clearCart}>
              {/* #e74c3c */}
              clear cart
            </Button>
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default Cart;
