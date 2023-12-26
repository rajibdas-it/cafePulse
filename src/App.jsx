import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
      </main>
    </div>
  );
}

export default App;
