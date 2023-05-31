import { useAppContext } from "./context/AppContext";
import Navbar from "./layout/ui/Navbar";
import { Routes, Route } from "@solidjs/router";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cinemas from "./Pages/Cinemas";
import Home from "./Pages/Home";
import Theater from "./Pages/dynamic-pages/Theater";
import Movies from "./Pages/dynamic-pages/Movies";
import UpcomingMovies from "./Pages/dynamic-pages/UpcomingMovies";
import TheaterSelector from "./Pages/dynamic-pages/TheaterSelector";
import BookTickets from "./Pages/dynamic-pages/BookTickets";

function App() {
  const { isDarkMode } = useAppContext();

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
        <Route path="/bookticket/:id" component={BookTickets} />
        <Route path="/upcoming-movies/:id" component={UpcomingMovies} />
        <Route path="/movies/theater/:id" component={TheaterSelector} />
      </Routes>
    </div>
  );
}

export default App;
