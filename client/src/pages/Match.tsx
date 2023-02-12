import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { User } from "../types";

const Match = () => {
  const [users, setUsers] = useState([]);
  const [interests, setInterests] = useState([]);
  const singleUser = useSelector((state: RootState) => state.user.user);
  const Users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();

  const getUsers = async () => {
    try {
      const response = await fetch("/api/v1/slush/users");
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(jsonData);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const getAllInterests = async () => {
    try {
      const response = await fetch(`/api/v1/slush/interests/`);
      const jsonData = await response.json();
      setInterests(jsonData);
      await console.log("here is the result:", interests);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleAllVcs = async () => {
    const VCs = users.filter((user: any) => user.is_vc === true);
    console.log("here is the result:", VCs);
    setUsers(VCs);
  };

  const handleMatching = async () => {
    const len = Users.length;
    console.log(len);
    const randomMatching = users.filter(
      (user: any) => user.id === Math.floor(Math.random() * len)
    );
    setUsers(randomMatching);
  };

  useEffect(() => {
    getUsers();
    getAllInterests();
  }, []);

  return (
    <div className="container px-6 py-12 h-full w-1/2">
      <div>
        {" "}
        <h1 className="text-white">Hi {singleUser.name}</h1>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={getUsers}>
          See All Users
        </button>
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleAllVcs}>
          See All VCs
        </button>
        <button
          className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleMatching}>
          Random Match Me!
        </button>
      </div>
      <div>
        <table className="table mt-5 text-center w-full">
          <thead className="border-b bg-gray-800">
            <tr>
              <th className="text-sm font-medium text-white px-6 py-4">Name</th>
              <th className="text-sm font-medium text-white px-6 py-4">Age</th>
              <th className="text-sm font-medium text-white px-6 py-4">
                Interests
              </th>
              <th className="text-sm font-medium text-white px-6 py-4">
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user: any) => (
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {user.age}
                </td>
                {interests.map((interest: any) => {
                  if (user.id === interest.user_id) {
                    return (
                      <td className="flex flex-row text-center items-center justify-center text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {interest.title}
                      </td>
                    );
                  }
                  return (
                    <td className="flex flex-row text-center items-center justify-center"></td>
                  );
                })}

                <td>
                  <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Send Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Match;
