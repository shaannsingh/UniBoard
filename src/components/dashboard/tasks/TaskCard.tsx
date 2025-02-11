import { useState } from "react";

interface TaskCardProps {
  name: string;
  preview: string;
  body: string;
  deadline: string;
}

const TaskCard = ({ name, preview, body, deadline }: TaskCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="m-4 px-4 py-3 border-1 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:scale-105 hover:cursor-pointer hover:shadow-xl"
    >
      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {name}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-200 line-clamp-2">
        {preview}
      </p>
      {isOpen && (
        <div className="flex items-center justify-start my-2 bg-gray-200 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-500 rounded-lg">
          <p className="font-semibold text-sm text-gray-600 dark:text-gray-200 p-2">
            {body}
          </p>
        </div>
      )}
      <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
        Due: {deadline}
      </span>
    </div>
  );
};

export default TaskCard;
