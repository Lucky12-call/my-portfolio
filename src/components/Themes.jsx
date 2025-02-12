import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useThemeStore } from "../store/useThemeStore";

const Themes = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, [setTheme]);

  return (
    <div className="flex items-center gap-5 p-5">
      <button
        onClick={toggleTheme}
        className={`rounded-full border border-blue-800 w-16 p-1 flex ${
          theme === "light" ? "justify-start" : "justify-end"
        }`}
      >
        {theme === "light" ? (
          <MdDarkMode className="text-gray-900 w-5 h-5" />
        ) : (
          <CiLight className="text-white w-5 h-5" />
        )}
      </button>
    </div>
  );
};

export default Themes;
