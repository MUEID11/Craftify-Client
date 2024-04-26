import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home/>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>

  )
}

export default App
