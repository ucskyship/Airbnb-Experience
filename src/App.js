import './App.css';
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Body from "./component/main/Body";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Body />
    </div>
  );
}

export default App;
