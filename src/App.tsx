import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="romination-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
