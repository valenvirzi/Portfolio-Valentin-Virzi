import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="app flex min-h-screen flex-col">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
