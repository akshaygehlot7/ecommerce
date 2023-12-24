// import { Input } from "@mui/base";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
// import Button from "../../Components/Button/Button";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  // border border-slate-500
  // mt-4 mb-8 w-96 h-72
  return (
    <Container>
      <Row className="mb-12">
        <Col>
          <form onSubmit={submitHandler}>
            <div className="flex justify-center mt-16">
              <div className=" text-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
                {/* <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div> */}
                <h3 className="mt-4 mb-4 text-xl font-semibold text-blue-400 pt-2">
                  Login In
                </h3>
                <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                {/* Inputs */}
                <div className="flex flex-col items-center justify-center">
                  <label className="w-64 text-black">
                    Email
                    <input
                      type="email"
                      className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                      placeholder="Email"
                      required
                      ref={loginNameRef}
                    ></input>
                  </label>
                  <label className="w-64 text-black">
                    Password
                    <input
                      type="password"
                      className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
                      placeholder="Password"
                      required
                    ref={loginPasswordRef}
                    ></input>
                  </label>
                  <button type="submit" className="rounded-2xl m-4 text-white bg-blue-500 w-2/5 px-4 py-2 shadow-md hover:text-blue-400 hover:bg-white transition duration-200 ease-in">
                    Login In
                  </button>
                </div>
                <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
                <p className="text-black mt-4 text-sm">
                  Don't have an account?
                </p>
                <Link to="/signup">
                  <p className="text-black mb-4 text-sm font-medium cursor-pointer">
                    Create a New Account?
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </Col>
        {/* <Link to="/signUp">Don't have an account? <span>Create an account</span></Link> */}
      </Row>
    </Container>
  );
};

export default Login;
