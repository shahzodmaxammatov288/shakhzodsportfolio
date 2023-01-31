import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
