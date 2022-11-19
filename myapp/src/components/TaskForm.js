import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from 'uuid'

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch()
//   console.log(dispatch(addTask()))

  const handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    setTask({
        ...task,[e.target.name]: e.target.value,
    })
  };

  // const stateTask = useSelector((state) => state.tasks)
  // console.log(stateTask);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id:uuid()
    }))
  }

  return (
    <>
      <div className="flex bg-slate-300 min-h-screen justify-center items-center ">
        <form className="flex justify-around items-center gap-3 flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
            className="w-52 h-16 rounded-md shadow-xl"
          />
          <textarea
            name="description"
            placeholder="description"
            onChange={handleChange}
            className="w-52 h-20 rounded-md shadow-xl"
          ></textarea>
          <button className="w-32 h-12 bg-green-600 shadow-2xl rounded-2xl outline-none hover:bg-green-800 transition-all duration-500 ease-in-out text-2xl font-medium hover:text-white hover:translate-y-1">
            save
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
