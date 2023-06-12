import "./dashboard.css";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Navigation />
      <Menu />
      <div className="dashboard-container">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
