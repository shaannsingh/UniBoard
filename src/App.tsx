import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import TaskList from "./components/dashboard/tasks/TaskList";
import "./styles.css";

function App() {
  const sampleTasks = [
    {
      id: 1,
      name: "Complete Dashboard UI",
      preview: "Need to finish the task manager component and styling",
      body: "Full description here...",
      date: "2024-02-02",
      deadline: "10-02-24",
    },
    {
      id: 2,
      name: "Add create/edit functionality to tasks",
      preview: "Add functionality to the + icon",
      body: "Full description here...",
      date: "2024-02-02",
      deadline: "10-02-24",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <TaskList tasks={sampleTasks} />
      <Footer />
    </div>
  );
}

export default App;
