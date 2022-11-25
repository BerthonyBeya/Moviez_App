import "./App.scss";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import Navbar from "./Navbar/Navbar";
import MoviesGrid from "./MoviesGrid/MoviesGrid";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeCarousel />
      <MoviesGrid type={"Movies"} />
      <MoviesGrid type={"Series"} />
    </div>
  );
}

export default App;
