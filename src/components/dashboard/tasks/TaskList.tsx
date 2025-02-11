import { Task } from "../../../types";
import AddTaskPopover from "./feature-components/AddTaskCard";
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
        <AddTaskPopover />
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
