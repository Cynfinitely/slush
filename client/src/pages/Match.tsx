import axios from "axios";
import React, { useEffect, useState } from "react";

const Match = () => {
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h1>Hi User</h1>
      </div>
      <div>
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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Interests</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map(
              (user: any) =>
                user.is_vc && (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>---</td>
                    <td>
                      <button>Email</button>
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
