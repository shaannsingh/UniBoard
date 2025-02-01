import { useEffect, useState } from "react";
import { Home, FileQuestion, Mail, Sun, Moon } from "lucide-react";

const navItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: FileQuestion, label: "About" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  return (
    <nav className="fixed top-0 right-0 left-0 flex items-center justify-center h-16 bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center space-x-32">
        {navItems.map((item) => (
          <button title={item.label} key={item.id}>
            <item.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:cursor-pointer" />
          </button>
        ))}

        <button
          className="hover:cursor-pointer"
          title="Toggle Dark Mode"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
