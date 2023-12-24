import React from "react";
import { Col, Row } from "reactstrap";
import Product from "../../Product/Product";

const GridView = ({ products }) => {
  return (
    <Row>
      <Col>
        <div className="flex flex-wrap gap-x-8">
          {products.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </Col>
    </Row>
  );
};

export default GridView;
