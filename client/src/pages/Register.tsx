import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { onRegistration } from "../api/auth";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    is_VC: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const { data } = await onRegistration(values);
      setSuccess(data.message);
      setValues({ name: "", email: "", age: "", is_VC: "", password: "" });
    } catch (error: any) {
      setError(error.response.data.errors[0].msg);
    }
  };
  return (
    <section className="container  h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Slush User
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={(e) => onSubmit(e)}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  value={values.name}
                  onChange={(e) => onChange(e)}
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name"
                  required></input>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  value={values.email}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required></input>
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your age
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  value={values.age}
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="age"
                  required></input>
              </div>
              <div className="flex flex-row text-center">
                <label>
                  Are you VC?
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => onChange(e)}
                    value={values.is_VC}
                    name="is_VC"
                    id="is_VC">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </label>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  onChange={(e) => onChange(e)}
                  value={values.password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required></input>
              </div>
              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
              <div style={{ color: "green", margin: "10px 0" }}>{success}</div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full">
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={`/login`}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
