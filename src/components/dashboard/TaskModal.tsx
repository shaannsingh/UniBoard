import { Task } from "../../types";

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal = ({ task, isOpen, onClose }: TaskModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-lg w-full max-w-2xl m-4 p-6 shadow-xl transform transition-all animate-in fade-in slide-in-from-bottom duration-300">
        {/* Close Button */}
        <button
          title="close"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Task Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {task.name}
          </h2>

          <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>Due: {task.deadline}</span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mt-4">{task.body}</p>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
