import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const signupNameRef = useRef();
  const signupEmailRef = useRef();
  const signupMessageRef = useRef();
  const signupNumberRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Row>
      <Col>
      <form  onSubmit={submitHandler}>
        <div className="flex justify-center mt-16">
          <div className="rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
            {/* <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div> */}
            <h3 className="mt-4 mb-2 text-xl font-semibold text-blue-400 pt-2">
              Contact
            </h3>
            <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
            <div className="flex space-x-2 m-4 items-center justify-center">
              <div className="socialIcon">
                <FaGithub />
              </div>
              <div className="socialIcon">
                <FaInstagram />
              </div>
              <div className="socialIcon">
                <FaLinkedin />
              </div>
            </div>
            {/* Inputs */}
            <div className="flex flex-col items-center justify-center">
            <label className="w-64">
            Name
            <input
              type="text"
              className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Name"
              required
                      ref={signupNameRef}
            ></input>
          </label>
          <label className="w-64">
            Email
            <input
              type="email"
              className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Email"
              required
                      ref={signupEmailRef}
            ></input>
          </label>
          <label className="w-64">
            Number
            <input
              type="number"
              className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Number"
              required
                      ref={signupNumberRef}
            ></input>
          </label>
          <label className="w-64">
            Message
            <textarea
              type="Message"
              className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
              placeholder="Message"
              required
                      ref={signupMessageRef}
            ></textarea>
          </label>

              <button className="rounded-2xl m-4 text-white bg-blue-500 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
                Sign In
              </button>
            </div>
            
          </div>
        </div>
        </form>
      </Col>
    </Row>
  );
};

export default Contact;
