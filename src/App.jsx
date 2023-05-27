import { useThemeContext } from "./context/ThemeContext";
import Navbar from "./layout/ui/Navbar";
import { Routes, Route } from "@solidjs/router";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cinemas from "./Pages/Cinemas";
import Home from "./Pages/Home";
import Theater from "./Pages/dynamic-pages/Theater";
import Movies from "./Pages/dynamic-pages/Movies";
import UpcomingMovies from "./Pages/dynamic-pages/UpcomingMovies";

function App() {
  const { isDarkMode } = useThemeContext();

  return (
    <div class={`app ${isDarkMode() ? "dark" : "light"}`}>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cinemas" component={Cinemas} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/theater/:id" component={Theater} />
        <Route path="/movies/:id" component={Movies} />
        <Route path="/upcoming-movies/:id" component={UpcomingMovies} />
      </Routes>
    </div>
  );
}

export default App;
