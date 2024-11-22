"use client"
import React, { useState, useEffect } from "react";

const Page = () => {
  const [task, setTask] = useState(""); // State to store the task input
  const [desc, setDesc] = useState(""); // State to store the description input
  const [mainTask, setMainTask] = useState([]); // State to store the list of tasks

  // Submit Handler to add a task to the mainTask array
  const submitHandler = (e) => {
    e.preventDefault();
    // Add the new task to the existing task list
    setMainTask([...mainTask, { task, desc }]);
    setTask(""); // Clear the task input field
    setDesc(""); // Clear the description input field
  };

  // Delete Handler to remove a task from the mainTask array by index
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]; // Make a shallow copy of mainTask
    copyTask.splice(i, 1); // Remove the task at index 'i'
    setMainTask(copyTask); // Update the state with the new task list
  };

  // Log the tasks whenever mainTask state changes
  useEffect(() => {
    console.log(mainTask);
  }, [mainTask]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="bg-black text-white p-5 text-3xl font-extrabold text-center rounded">
          My To do List:
        </h1>

        <form onSubmit={submitHandler} className="mt-6">
          <div className="mb-4">
            <input
              type="text"
              className="w-full text-xl border-zinc-800 border-2 px-4 py-2 rounded"
              placeholder="Enter Tasks Here"
              value={task}
              onChange={(e) => setTask(e.target.value)} // Update task state
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              className="w-full text-xl border-zinc-800 border-2 px-4 py-2 rounded"
              placeholder="Input Description Here"
              value={desc}
              onChange={(e) => setDesc(e.target.value)} // Update description state
            />
          </div>

          <button className="w-full bg-black text-white px-4 py-3 text-xl rounded font-bold">
            Add Task
          </button>
        </form>

        <hr className="my-6" />

        <div className="p-4 bg-slate-200">
          {/* Conditionally render tasks or show "No Task Available" */}
          {mainTask.length === 0 ? (
            <h2>No Task Available</h2>
          ) : (
            mainTask.map((t, i) => (
              <li key={i} className="flex items-center justify-between mb-3">
                <div className="w-2/3">
                  <h5 className="text-2xl font-semibold">{t.task}</h5>
                  <h6 className="text-lg font-medium">{t.desc}</h6>
                </div>
                <button
                  onClick={() => deleteHandler(i)} // Pass the index to deleteHandler
                  className="bg-red-300 text-white px-4 py-2 rounded font-bold"
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
