import "./dashboard.css";
import Navigation from "../Navigation/Navigation";
import Menu from "../Menu/Menu";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const userInfo = useSelector((state) => state.userInfo);
  if (userInfo)
    return (
      <div>
        <Navigation />
        {/* TODO put a condition here also */}
        {userInfo.loggedIn && <Menu />}
        <div className="dashboard-container">
          {userInfo.loggedIn && <Outlet></Outlet>}
          {/* TODO may be it might be a good idea to keep track if someone is logged or not here and then not show if user is not logged in. */}
        </div>
      </div>
    );
}
