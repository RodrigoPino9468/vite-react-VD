import Navbar from "./components/Navbar";
import MainMenu from "./components/MainMenu";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <Navbar />
      <MainMenu />
      <Outlet />
      <Footer />
    </main>
  );
}
