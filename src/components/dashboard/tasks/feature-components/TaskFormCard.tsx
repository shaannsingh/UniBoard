import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Task } from "@/types";

interface TaskFormState {
  name: string;
  preview: string;
  body: string;
  deadline: Date | undefined;
}

interface TaskFormProps {
  onSubmit: (data: Omit<Task, "id">) => void;
  onCancel: () => void;
}

const TaskFormCard = ({ onSubmit, onCancel }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormState>({
    name: "",
    preview: "",
    body: "",
    deadline: undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.deadline) return;
    onSubmit({
      name: formData.name,
      preview: formData.preview,
      body: formData.body,
      deadline: formData.deadline,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="m-4 px-4 py-3 border-1 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Create New Task..."
          className="w-full text-md font-semibold text-gray-800 dark:text-gray-200 mb-2 bg-transparent border-none focus:outline-none placeholder:text-gray-400 placeholder:italic placeholder:opacity-75"
        />

        <textarea
          name="preview"
          value={formData.preview}
          onChange={handleChange}
          placeholder="Give a brief summary of what you need to do."
          className="w-full text-sm text-gray-500 dark:text-gray-200 bg-transparent border-none focus:outline-none resize-none placeholder:text-gray-400 placeholder:opacity-75"
          rows={1}
        />

        <div className="flex items-center justify-start bg-gray-200 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-500 rounded-lg my-2">
          <textarea
            name="body"
            value={formData.body}
            onChange={handleChange}
            placeholder="Now what exactly do you need to do?"
            className="w-full font-semibold text-sm text-gray-600 dark:text-gray-200 p-2 bg-transparent border-none focus:outline-none resize-none placeholder:text-gray-400"
            rows={3}
          />
        </div>

        <div className="flex items-center justify-between">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="p-0 text-gray-500 dark:text-gray-400 text-sm font-semibold hover:bg-transparent"
              >
                <CalendarIcon className="h-4 w-4 italic" />
                {formData.deadline
                  ? `Due: ${formData.deadline.toDateString()}`
                  : "Set a deadline"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.deadline}
                onSelect={(date) =>
                  setFormData((prev) => ({ ...prev, deadline: date }))
                }
                initialFocus
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
              />
            </PopoverContent>
          </Popover>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onCancel}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!formData.deadline}
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              Create
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskFormCard;
