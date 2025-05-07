import React, { useState } from "react";
import uberLogo from "../assets/uberLogo.png";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <img className="w-16 mb-10 ml-1" src={uberLogo} alt="uber-logo" />
          <h3 className="text-lg font-inter font-medium mb-2">
            What's your name
          </h3>
          <div className="flex gap-4 mb-6">
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-1 py-2  text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <input
              required
              className="bg-[#eeeeee] w-1/2 rounded px-4 mt-1 py-2  text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>

          <h3 className="text-lg font-inter font-medium mb-2">
            What's your email
          </h3>
          <input
            required
            className="bg-[#eeeeee] rounded mb-6 px-4 mt-1 py-2  w-full text-lg placeholder:text-base"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-6 rounded px-4 mt-1 py-2  w-full text-lg placeholder:text-base"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button className="bg-[#111] text-[#fff] font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center mb-2">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login as user
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight text-gray-500">
          This site is protected by reCAPTCHA and the{" "}
          <a
            target="_blank"
            href="https://d1nyezh1ys8wfo.cloudfront.net/static/PDFs/Legal_PDFs/2019-07+Uber+Privacy+Notice.pdf"
          >
            <span className="text-blue-400 underline">
              Google Privacy Policy
            </span>
          </a>{" "}
          and <span className="text-blue-400 underline">Terms of Service</span>{" "}
          apply
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
