import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import { useProductContext } from "../../context/productcontex";
import { useParams } from "react-router-dom";
import Stars from "../../Components/Ui/Stars/Stars";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Images from "../../Components/Ui/Images/Images";
import AddToCart from "../AddToCart/AddToCart";
import FormatPrice from "../../Components/FormatPrice/FormatPrice";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    // category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Row className="flex justify-center">
      <div className="grid gap-x-8 gap-y-4 grid-cols-2 w-10/12">
        <Col className="">
          {/* product Images   */}
          <div className="flex items-center ">
            <Images imgs={image} />
          </div>
        </Col>
        <Col className=" ">
          {/* product dAta  */}
          <div className="flex flex-col items-start justify-center gap-x-8">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />

            <p className="font-medium mt-4 mb-8">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="font-bold mb-4 text-blue-600/100">
              Deal of the Day: price={price}
            </p>
            <p>{description}</p>
            <div className="w-full flex justify-between items-center mb-4">
              <div className="text-webkit">
                <TbTruckDelivery className="rounded-full bg-slate-300 w-24 h-12 p-2" />
                <p className="text-lg pt-3">Free Delivery</p>
              </div>

              <div className="text-webkit">
                <TbReplace className="rounded-full bg-slate-300 w-24 h-12 p-2" />
                <p className="text-lg pt-3">15 Days Replacement</p>
              </div>

              <div className="text-webkit">
                <TbTruckDelivery className="rounded-full bg-slate-300 w-24 h-12 p-2" />
                <p className="text-lg pt-3">Akshay Delivered </p>
              </div>

              <div className="text-webkit">
                <MdSecurity className="rounded-full bg-slate-300 w-24 h-12 p-2" />
                <p className="text-lg pt-3">1 Year Warranty </p>
              </div>
            </div>

            <div className="flex flex-col gap-x-8 text-2xl">
              <p className="text-xl pt-3">
                Available:
                <span className="font-semibold">
                  {" "}
                  {stock > 0 ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p className="text-xl pt-3">
                ID : <span className="font-semibold"> {id} </span>
              </p>
              <p className="text-xl pt-3">
                Brand :<span className="font-semibold"> {company} </span>
              </p>
            </div>
            <hr className="w-11/12 mt-4 mb-8" />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </Col>
      </div>
    </Row>
  );
};

export default SingleProduct;
