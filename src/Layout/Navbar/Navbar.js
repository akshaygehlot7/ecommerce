import React, { useRef, useEffect } from "react";
import { IoIosSearch, IoMdPerson } from "react-icons/io";
import { IoBagHandleOutline, IoMenu } from "react-icons/io5";
// import { useSelector, useDispatch } from "react-redux";
// import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import { NavLink, Link } from "react-router-dom";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About",
    path: "/about",
  },
  {
    display: "Products",
    path: "/products",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <div className="flex w-full text-center items-start gap-96 px-8 py-4 relative">
        <div className="items-center inline-flex relative flex-[0_0_auto]">
          <img
            className="w-24 h-24"
            src="https://banner2.cleanpng.com/20180519/jjs/kisspng-e-commerce-logo-electronic-business-5b00d2d0918d84.2335269315267806245962.jpg"
            alt="logo"
          />
        </div>
        {/* ======= menu ======= */}
        <div className="inline-flex items-start px-2 py-2 relative">
          <div className="menu d-flex align-items-center">
            {nav__links.map((item, index) => (
              <NavLink to={item.path} key={index} className="ml-5 mr-5">
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>

        {/* menu icons */}
        <div className=" justify-end items-start gap-[38px] px-[10px] py-[12px] inline-flex relative flex-[0_0_auto]">
          <IoIosSearch className="!relative !w-[24px] !h-[24px]" />
          {/* <NavLink></NavLink> */}
          <NavLink to="/login">
          <IoMdPerson className="!relative !w-[24px] !h-[24px]" /></NavLink>
          <NavLink to="/cart">
            <IoBagHandleOutline className="!relative !w-[24px] !h-[24px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
