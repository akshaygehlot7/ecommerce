import React from 'react'
import { Col, Row } from 'reactstrap'
import { useFilterContext } from '../../../context/filter_context'
import { FaCheck } from "react-icons/fa";
import Button from '../../Button/Button';
import FormatPrice from '../../FormatPrice/FormatPrice';
// import { current } from '@reduxjs/toolkit'

const FilterSection = () => {
  const {
    filters: {text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getuniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });
    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  }
  // we need to have the individual data of each in an array format
  const categoryData = getuniqueData(all_products, "category");
  const companyData = getuniqueData(all_products, "company");
  const colorsData = getuniqueData(all_products, "colors");
console.log(
    "🚀 ~ file FilterSection.js ~ line 23 ~ FilterSection ~ companyData",
    colorsData
  );

  return (
    <Row>
      <Col className="w-min ml-16">
        <div className="border border-stone-500 mb-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <input 
            type="text"
            name="text"
            placeholder="Search...."
            value={text}
            onChange={updateFilterValue}
            />
          </form>
        </div>
        <div className="mb-4">
          <h3 className="text-xl">Category</h3>
          <div>
            {categoryData.map((curElem, index) => {
              return(<div className="flex mb-4">
              <button
                key={index}
                type="button"
                name="category"
                value={curElem}
                className={curElem === category ? "border-b-black" : ""}
                onClick={updateFilterValue}>
                  {curElem}
                </button></div>
              );
            })}
          </div>
        </div>
        <div className="mb-4">
          <h3 className="mb-4 text-xl">Company</h3>
          <form action="#">
            <select name="company"
            id="company"
            className="border border-stone-300"
            onClick={updateFilterValue}>
              {companyData.map((curElem, index) =>{
                return(
                  <option key={index} value={curElem} name="company">
                    {curElem}
                  </option>
                )
              })}
            </select>
          </form>
        </div>
        <div>
          <h3 className="mb-3 text-xl">Colors</h3>
          <div className="flex justify-center mb-3">
            {colorsData.map((curColor, index) =>{
              if(curColor === "all"){
                return(
                  <button
                   key={index}
                   type="button"
                   value={curColor}
                   name="color"
                   className="bg-transparent capitalize cursor-pointer"
                   onClick={updateFilterValue}>
                    All
                  </button>
                );
              }
              return(
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={color === curColor ? "btnStyle active" : "btnStyle"}
                  onClick={updateFilterValue}>
                    {color === curColor ? <FaCheck className="fill-white"/> : null}
                </button>
              )
            })}
          </div>
        </div>
        <div className="mb-3">
          <h3 className="mb-1">Price</h3>
          <p>
          <FormatPrice price={price} />
          </p>
          <input
            className="p-0 cursor-pointer"
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={updateFilterValue}
            />
        </div>
        <div>
          <Button 
          // className="bg-red-500 fill-white"
          onClick={clearFilters}>
          Clear Filters
          </Button>
        </div>
      </Col>
    </Row>
  )
}

export default FilterSection