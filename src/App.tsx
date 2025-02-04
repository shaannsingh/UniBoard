import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import TaskList from "./components/dashboard/tasks/TaskList";
import "./styles.css";

const App = () => {
  const sampleTasks = [
    {
      _id: "1",
      name: "Complete Dashboard UI",
      preview: "Need to finish the task manager component and styling",
      body: "I need to add a calendar, a notes section, a files section, and I don't know.. some more stuff for fun.",
      deadline: new Date("10-02-24"),
    },
    {
      _id: "2",
      name: "Add create/edit functionality to tasks",
      preview: "Add functionality to the + icon",
      body: "Almost done",
      deadline: new Date("10-02-24"),
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <TaskList tasks={sampleTasks} />
      <Footer />
    </div>
  );
};

export default App;
