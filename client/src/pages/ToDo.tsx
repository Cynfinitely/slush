import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditTodo from "../components/EditTodo";
import { AppDispatch, RootState } from "../redux/store";

const ToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUser_Id] = useState("");
  const [todos, setTodos] = useState([]);
  const User = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const body = { title, description, user_id };
      const response = await axios.post(
        "http://localhost:5000/api/v1/slush/todos/",
        {
          title,
          description,
          user_id,
        }
      );
      getTodos();
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const deleteTodo = async (id: any) => {
    try {
      const deleteTodo = await axios.delete(
        `http://localhost:5000/api/v1/slush/todos/${id}`
      );

      setTodos(todos.filter((todo: any) => todo.id !== id));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/slush/todos/");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <div className="container px-6 py-12 h-full">
        <Fragment>
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
            Slush Todo List
          </h1>
          <form
            className="flex flex-row justify-center mt-5 "
            onSubmit={onSubmitForm}>
            <input
              type="text"
              className="border border-indigo-600 text-center"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              className="border border-indigo-600 text-center"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="text"
              className="border border-indigo-600 text-center"
              value={User.user_id}
              onChange={(e) => setUser_Id(e.target.value)}
              placeholder="User_id"
            />
            <button className="bg-[#cf0] hover:bg-white text-black font-bold py-2 px-4 border-b-4 border-[#cf0] hover:border-[#cf0] rounded">
              Add To-Do
            </button>
          </form>
        </Fragment>
        <Fragment>
          {" "}
          <table className="table mt-5 text-center w-full">
            <thead className="border-b bg-gray-800">
              <tr>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Title
                </th>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Description
                </th>
                <th className="text-sm font-medium text-white px-6 py-4">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo: any) => (
                <tr
                  key={todo.id}
                  className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {todo.title}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {todo.description}
                  </td>
                  <td className="flex flex-row justify-center">
                    <EditTodo todo={todo} />
                    <button
                      className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => deleteTodo(todo.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default ToDo;
