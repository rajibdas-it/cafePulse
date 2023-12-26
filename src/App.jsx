import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

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
        <div id="about">
          <About />
        </div>
        <div id="product">
          <Product />
        </div>
      </main>
    </div>
  );
}

export default App;
