import RootLayout from "./components/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import Cursor from "./components/Cursor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
]);

function App() {
  const { theme } = useThemeStore();

  return (
    <section data-theme={theme} className="relative overflow-hidden">
      <Cursor />
      <RouterProvider router={router} />
      {/* Background spotlight */}
      <div
        className="absolute w-40 md:w-60 h-96 md:h-[600px] rotate-45 bg-spotlight rounded-full blur-3xl opacity-50"
        style={{
          right: `0px`,
          top: `0px`,
        }}
      ></div>
    </section>
  );
}

export default App;
