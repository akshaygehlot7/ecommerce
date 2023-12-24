import React from "react";
import { Col, Row } from "reactstrap";
import FilterSection from "../../Components/Ui/FilterSection/FilterSection";
import Sort from "../../Components/Ui/Sort/Sort";
import ProductList from "../../Components/Ui/ProductList/ProductList";

const Products = () => {
  return (
    <Row>
      <Col>
        <div className="max-w-full min-w-min grid gap-x-11 template">
          <div className="w-min">
            <FilterSection />
          </div>
          <div>
            <div className="w-5/6">
              <Sort />
            </div>
            <div className="w-5/6">
              <ProductList />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Products;
