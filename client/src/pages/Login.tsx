import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import { onLogin } from "../redux/slices/userSlice";

const Login = () => {
  const User = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();
  console.log("HERE IS THE USERS", User);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await dispatch(onLogin(values));
      dispatch(authenticateUser());
      localStorage.setItem("isAuth", "true");
      navigate("/main");
    } catch (error: any) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
    }
  };

  return (
    <section className="">
      <div className="container px-6 py-12 h-full ">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              alt="Phone"
              className="w-full"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20 text-center">
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-6">
                <input
                  onChange={(e) => onChange(e)}
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  required
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  value={values.password}
                  id="password"
                  name="password"
                  required
                  onChange={(e) => onChange(e)}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-[#cf0] text-black font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
