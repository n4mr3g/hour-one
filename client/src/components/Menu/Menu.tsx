import { Link } from "react-router-dom";
import "./Menu.css";
export default function Menu() {
  return (
    <div className="user-menu">
      <Link className="menu-link " to={"/app"}>
        Explore
      </Link>
      <Link className="menu-link menu-selected" to={"/app/dashboard/profile"}>
        Profile
      </Link>
      <Link className="menu-link" to={"/app/dashboard/create"}>
        Create
      </Link>
      {/* //TODO - change this to saved */}
      <Link className="menu-link" to={"/app/dashboard/mylist"}>
        favourite
      </Link>
      {/* //TODO - change this to my offers */}
      <Link className="menu-link" to={""}>
        My Offers
      </Link>
      <Link className="menu-link" to={""}>
        Messages
      </Link>
    </div>
  );
}
