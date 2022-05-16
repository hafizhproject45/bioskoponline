import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import Trending from "./components/Trending";
import SedangTayang from "./components/SedangTayang";
import Deskripsi from "./components/Deskripsi";
import Footer from "./components/Footer";
import "./style/Home.css";

function App() {
  return (
    <div className="home">
      <div>
        <NavigationBar />
      </div>
      <div>
        <Home />
      </div>
      <div id="deskripsi">
        <Deskripsi />
      </div>
      <div id="trending">
        <Trending />
      </div>
      <div id="sedangtayang">
        <SedangTayang />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
