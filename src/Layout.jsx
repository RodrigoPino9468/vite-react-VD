import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="">
      <div className="gradiente-header-nav">
        <Header />
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </main>
  );
}
