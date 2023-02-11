import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "../components/EditTodo";

const ToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUser_Id] = useState("");
  const [todos, setTodos] = useState([]);

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
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Slush Todo List
          </h1>
          <form
            className="flex mt-5"
            onSubmit={onSubmitForm}>
            <input
              type="text"
              className="border border-indigo-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              className="border border-indigo-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <input
              type="text"
              className="border border-indigo-600"
              value={user_id}
              onChange={(e) => setUser_Id(e.target.value)}
              placeholder="User_id"
            />
            <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
              Add
            </button>
          </form>
        </Fragment>
        <Fragment>
          {" "}
          <table className="table mt-5 text-center w-full">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo: any) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
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
