import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const stateTask = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <div className="grid grid-cols-4 bg-slate-500 ">
        {stateTask.map((task) => (
          <div
            key={task.id}
            className="bg-slate-200 m-5 shadow-2xl rounded-md w-52 h-20 "
          >
            <h3 className="text-sm font-bold">Title: {task.title}</h3>
            <p className="text-sm font-medium">Desc: {task.description}</p>
            <button
              className="shadow-3xl rounded-full w-16 h-6 text-sm transition-all duration-500 bg-red-600 hover:bg-red-400"
              onClick={() => handleDelete}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;
