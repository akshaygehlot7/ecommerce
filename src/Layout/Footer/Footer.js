import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="justify-center flex items-start gap-[24px] px-[76px] py-[30px] relative bg-backgroundvariant-1">
      <div className="inline-flex flex-col gap-[24px] items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-primaryprimary text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
          COLLECTIONS
        </div>
        <div className="flex flex-col w-[262px] gap-[9px] items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Mobiles
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Watchs
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Computers
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Laptops
          </div>
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Accessories
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col gap-[24px] items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-primaryprimary text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
          LEARN
        </div>
        <div className="flex flex-col w-[262px] gap-[9px] items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            <NavLink to="/about">About us</NavLink>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col gap-[24px] items-start relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-primaryprimary text-[16px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#282828] text-[16px] tracking-[0]">
            Customer
          </span>
          <span className="text-[14px]">&nbsp;</span>
          <span className="[font-family:'Montserrat-Medium',Helvetica] font-medium text-[#282828] text-[16px] tracking-[0]">
            Service
          </span>
        </p>
        <div className="flex flex-col w-[262px] gap-[9px] items-start relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Ordering and payment
          </div>
          <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Delivery
          </div>
          <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Privacy and policy
          </div>
          <div className="relative w-fit font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
            Terms &amp; Conditions
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col gap-[24px] items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-primaryprimary text-[16px] tracking-[0.15px] leading-[24px] whitespace-nowrap">
          CONTACT US
        </div>
        <div className="flex flex-col w-[262px] gap-[9px] items-start relative flex-[0_0_auto]">
          <div className="inline-flex gap-[8px] mr-[-8.00px] items-start relative flex-[0_0_auto]">
            <FaLocationDot className="!relative !w-[18px] !h-[18px]" />
            <p className="relative w-[244px] mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] [font-style:var(--body-medium-font-style)]">
              Katraj Pune Mharastra 411046
              <br />
              India
            </p>
          </div>
          <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
            <MdOutlineEmail className="!relative !w-[18px] !h-[18px]" />
            <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              Email: akshaygehlot003@gmail.com
            </div>
          </div>
          <div className="inline-flex items-start gap-[8px] relative flex-[0_0_auto]">
            <MdOutlineLocalPhone className="!relative !w-[18px] !h-[18px]" />
            <div className="relative w-fit mt-[-1.00px] font-body-medium font-[number:var(--body-medium-font-weight)] text-primaryprimary text-[length:var(--body-medium-font-size)] tracking-[var(--body-medium-letter-spacing)] leading-[var(--body-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-font-style)]">
              Tel: +91 7058451564
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
