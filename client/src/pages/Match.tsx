import axios from "axios";
import React, { useEffect, useState } from "react";

const Match = () => {
  const [users, setUsers] = useState([]);
  const [interests, setInterests] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/slush/users");
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(jsonData);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const getAllInterests = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/slush/interests/`
      );
      const jsonData = await response.json();
      setInterests(jsonData);
      await console.log("here is the result:", interests);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
    getAllInterests();
  }, []);

  return (
    <div className="container px-6 py-12 h-full w-1/2">
      <div>
        {" "}
        <h1>Hi User</h1>
      </div>
      <div className="flex flex-row justify-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See All VCs
          </span>
        </button>
        <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Match me with people
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
            {users.map(
              (user: any) =>
                user.is_vc && (
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
                      <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Send Email
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Match;
