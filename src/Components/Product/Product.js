import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import FormatPrice from "../FormatPrice/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Row>
      <Col>
        <NavLink to={`/singleproduct/${id}`}>
          <div className="w-80">
            <figure className="">
              <img src={image} alt={name} className="rounded-xl"></img>
              <figcaption>{category}</figcaption>
            </figure>

            <div>
              <div>
                <h3>{name}</h3>
                <p className="card-data--price">{<FormatPrice price={price} />}</p>
              </div>
            </div>
          </div>
        </NavLink>
      </Col>
    </Row>
  );
};

export default Product;
