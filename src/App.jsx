/* src/App.jsx */
import "./styles.css";
import { Navbar } from "./components/Navbar";   // optional sticky nav
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
