import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="container px-6 py-12 h-full">
      <div className="flex flex-col justify-center items-center flex-wrap h-full g-6 text-gray-800 ">
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
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            To-Do
          </Link>
          <Link
            to={"/match"}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Match
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
