import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import { FaCheck } from "react-icons/fa";
import { useCartContext } from '../../context/cart_context';
import { NavLink } from 'react-router-dom';
import CartAmountToggle from '../../Components/CartAmountToggle/CartAmountToggle';
import Button from '../../Components/Button/Button';


function AddToCart({ product }) {
    const { addToCart } = useCartContext();

  const { id, colors, stock } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Row>
        <Col>
        <div className="mb-4">
        <p className="flex">
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor}}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}>
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink onClick={() => addToCart(id, color, amount, product)}>
        <Button>Add To Cart</Button>
      </NavLink>
        </Col>
    </Row>
  )
}

export default AddToCart