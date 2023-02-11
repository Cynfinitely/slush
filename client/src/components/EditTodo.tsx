import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }: any) => {
  const [description, setDescription] = useState(todo.description);
  const [title, setTitle] = useState(todo.title);
  const [user_id, setUser_Id] = useState(todo.user_id);
  const [todos, setTodos] = useState([]);

  const [showModal, setShowModal] = useState(false);

  //edit todo function

  const updateToDo = async (e: any) => {
    e.preventDefault();
    try {
      const body = { title, description, user_id };
      const response = await fetch(
        `http://localhost:5000/api/v1/slush/todos/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location.href = "/todo";
      // await setShowModal(false);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {" "}
      <>
        <div className="flex items-center justify-center">
          <button
            className="text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
            type="button"
            onClick={() => setShowModal(true)}>
            Edit
          </button>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <h1>Edit To-Do</h1>
                  <form
                    className="flex flex-col mt-5"
                    onSubmit={updateToDo}>
                    <label
                      htmlFor=""
                      className="text-left">
                      Title
                    </label>
                    <input
                      type="text"
                      className="border border-indigo-600 text-center mb-2"
                      defaultValue={todo.title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                    />
                    <label
                      htmlFor=""
                      className="text-left">
                      Description
                    </label>
                    <input
                      type="text"
                      className="border border-indigo-600 text-center mb-2"
                      defaultValue={todo.description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Description"
                    />
                    <label
                      htmlFor=""
                      className="text-left">
                      User ID
                    </label>
                    <input
                      type="text"
                      className="border border-indigo-600 text-center mb-2"
                      defaultValue={todo.user_id}
                      onChange={(e) => setUser_Id(e.target.value)}
                      placeholder="User_id"
                    />
                    <button className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ">
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </Fragment>
  );
};

export default EditTodo;
