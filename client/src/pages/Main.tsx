import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container px-6 py-12 h-full">
      <div className="flex flex-col justify-center items-center flex-wrap h-full g-6 text-white ">
        <div className="">
          <img
            src=""
            alt=""
          />
          <h1>Welcome User</h1>
        </div>
        <div className="flex flex-row  m-5">
          <Link
            to={"/todo"}
            className="bg-[#cf0] hover:bg-white text-black font-bold py-2 px-4 border-b-4 border-[#cf0] hover:border-[#cf0] rounded">
            To-Do
          </Link>
          <Link
            to={"/match"}
            className="bg-[#cf0] hover:bg-white text-black font-bold py-2 px-4 border-b-4 border-[#cf0] hover:border-[#cf0] rounded">
            Match
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
