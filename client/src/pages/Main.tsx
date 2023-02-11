import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchUsers } from "../redux/slices/userSlice";
import Slush from "../assets/slush.png";

const Main = () => {
  const Users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log("here!", Users);

  return (
    <div className="container px-6 py-12 h-full">
      <div className="flex flex-col justify-center items-center  h-full g-6 text-white ">
        <div className="">
          <img
            src=""
            alt=""
          />
          <h1>
            Welcome to{" "}
            <img
              src={Slush}
              alt="slush"
            />
          </h1>
        </div>
        <div className="test flex flex-row w-1/6 justify-between m-5">
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
