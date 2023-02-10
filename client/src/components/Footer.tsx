import React from "react";
import Slush from "../assets/slush.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black w-full py-2 px-4 lg:px-8 lg:py-4 flex items-center justify-between text-white">
      <Link
        to={`https://github.com/Cynfinitely`}
        className="flex items-center hover:text-gray-500">
        dev:CYN
      </Link>
      <img
        src={Slush}
        alt="Logo"
        className="w-fit h-7"></img>
      <p>All Rights Reserved &copy;</p>
    </div>
  );
};

export default Footer;
