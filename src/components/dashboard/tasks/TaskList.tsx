import { Task } from "../../../types";
import TaskCard from "./TaskCard";

interface TaskListProps {
  tasks?: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <div className="fixed left-8 top-16 w-lg h-[calc(100vh-8.75rem)] bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="px-4 text-lg font-semibold text-gray-600 dark:text-gray-200">
          Tasks
        </h2>
        <svg
          className="mx-4 my-4 w-6 text-gray-600 dark:text-gray-200 inline-block hover:cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      </div>
      <div className="overflow-y-auto h-full">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              name={task.name}
              preview={task.preview}
              body={task.body}
              deadline={task.deadline.toDateString()}
            />
          ))
        ) : (
          <div className="pl-4 text-gray-600 dark:text-gray-200">
            No tasks! Get cracking!
          </div>
        )}
      </div>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </div>
  );
};

export default TaskList;
