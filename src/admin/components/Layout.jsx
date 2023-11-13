import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

export default function LayoutAdmin() {
  return (
    <>
      {/* HeaderAdmin */}
      <Header />
      <div className="container-fluid">
        <div className="row">
          {/* MenuAdmin */}
          <Menu />
          {/* Views */}
          <main id="dashboard_viewer" className="col-md-9 col-xl-10 ms-sm-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
