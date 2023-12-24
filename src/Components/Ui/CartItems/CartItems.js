import React from "react";
import { Col, Row } from "reactstrap";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../../context/cart_context";
import CartAmountToggle from "../../CartAmountToggle/CartAmountToggle";
import FormatPrice from "../../FormatPrice/FormatPrice";

const CartItems = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();
  return (
    <Row>
      <Col>
        <div className="cart_heading grid grid-five-column">
          <div className="items-center grid gap-x-6 capitalize text-left">
            <div>
              <figure>
                <img className="w-20 h-20 object-contain fill-transparent" src={image} alt={id} />
              </figure>
            </div>
            <div>
              <p>{name}</p>
              <div className="flex items-center justify-start gap-x-5">
                <p>color:</p>
                <div
                  className="w-7 h-7 rounded-3xl"
                  style={{ backgroundColor: color, color: color }}
                ></div>
              </div>
            </div>
          </div>
          {/* price   */}
          <div className="cart-hide">
            <p>
              <FormatPrice price={price} />
              {/* price={price} */}
            </p>
          </div>

          {/* Quantity  */}
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrement(id)}
          />

          {/* //Subtotal */}
          <div className="cart-hide">
            <p>
              <FormatPrice price={price * amount} />
              {/* price={price * amount} */}
            </p>
          </div>

          <div>
            <FaTrash className="cursor-pointer float-right" onClick={() => removeItem(id)} />
          </div>
        </div>
        <hr className="mt-3 mb-3" />
      </Col>
    </Row>
  );
};

export default CartItems;
