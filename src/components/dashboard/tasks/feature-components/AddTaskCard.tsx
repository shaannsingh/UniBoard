import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddTaskPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent
        side="right"
        className="bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 ml-1 mt-16 h-auto"
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">New Task</h4>
            <Input
              placeholder="Task name"
              className="border-1 border-gray-200 dark:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700"
            />
            <Input
              placeholder="Task preview"
              className="border-1 border-gray-200 dark:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700"
            />
            <Textarea
              placeholder="Task body"
              className="border-1 border-gray-200 dark:border-gray-700 focus:border-gray-200 dark:focus:border-gray-700"
            />
            <Input type="date" className="bg-gray-100 dark:bg-gray-700" />
            <Button className="w-full border-1 border-gray-200 dark:border-gray-700">
              Add Task
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AddTaskPopover;
