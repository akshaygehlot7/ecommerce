import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";

const ListView = ({ products }) => {
  return (
    <Row>
      <Col>
        <div className="container">
          {products.map((curElem) => {
            const { id, name, image, price, description } = curElem;
            return (
              <div className="flex mt-4 mb-4 hover:bg-slate-200">
                <figure className="w-1/3">
                  <img src={image} alt={name} />
                </figure>

                <div className="grid w-3/5 ml-4">
                  <h3>{name}</h3>
                  <p>{price}</p>
                  <p>{description.slice(0, 90)}...</p>

                  <NavLink to={`/singleproduct/${id}`}
                    className="hover:bg-white w-20 h-8"
                  >
                    <button className="justify-center flex items-center">
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default ListView;
