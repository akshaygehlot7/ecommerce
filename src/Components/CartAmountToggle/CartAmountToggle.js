import React from "react";
import { Col, Row } from "reactstrap";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button/Button";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <Row>
      <Col>
        <div className="mb-4">
          <div className="flex justify-center">
            <button 
            className="w-12"
            onClick={() => setDecrease()}>
              <FaMinus className="w-8 h-auto" />
            </button>
            <div className="h-auto w-8">{amount}</div>
            <button 
            className="w-12"
            onClick={() => setIncrease()}>
              <FaPlus className="w-8 h-auto" />
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CartAmountToggle;
