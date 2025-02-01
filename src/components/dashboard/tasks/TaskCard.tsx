interface TaskCardProps {
  name: string;
  preview: string;
  deadline: string;
}

const TaskCard = ({ name, preview, deadline }: TaskCardProps) => {
  return (
    <div className="m-4 px-4 py-3 border-1 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:scale-105 hover:cursor-pointer hover:shadow-xl">
      <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
        {name}
      </h3>
      <p className="text-xs text-gray-600 dark:text-gray-200 line-clamp-2">
        {preview}
      </p>
      <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold">
        Due: {deadline}
      </span>
    </div>
  );
};

export default TaskCard;
