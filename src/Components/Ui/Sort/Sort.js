import React from "react";
import { Col, Row } from "reactstrap";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../../context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <Row>
      <Col className="flex justify-between mt-4">
        {/* 1st Colum */}
        <div className="flex gap-x-16">
          <button
            className={
              grid_view ? "sort-active sort-btn h-12 w-12" : "sort-btn  h-12 w-12"}
            onClick={setGridView}
          >
            <BsFillGridFill className="h-8 w-auto" />
          </button>
          <button
            className={!grid_view ? "sort-active sort-btn  h-12 w-12": "sort-btn  h-12 w-12"}
            onClick={setListView}
          >
            <BsList className="h-8 w-auto" />
          </button>
        </div>

        {/* 2 colum */}
        <div className="my-4">
          <p>{`${filter_products.length} Product Available`}</p>
        </div>

        {/* 3 column */}
        <div className="cursor-pointer p-3">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              className="cursor-pointer p-3"
              onClick={sorting}
            >
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default Sort;
