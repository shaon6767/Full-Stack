import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar name="Synculer" isAdmin={false} age={26} />
      <Hero />
      <Footer />
    </>
  );
};

export default App;
