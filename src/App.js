import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </div>
  );
}

export default App;
