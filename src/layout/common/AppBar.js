import Navigation from "./Navigation";
import logo from "../../img/logo2.svg";
// import UserMenu from "layout/common/UserMenu/UserMenu";
// import AuthNav from "layout/common/AuthNav";
import { Header } from "./Header";
// import { Link } from "../../components/ui/Link";
import { NavLink } from "react-router-dom";
// import { useAuth } from "hooks";

export default function AppBar() {
  //   const { isLoggedIn } = useAuth();

  return (
    <div
      style={{
        background: "#dbe5f0",
        position: "sticky",
        top: "0",
        zIndex: "10",
      }}
    >
      <Header>
        <NavLink to="/">
          <img src={logo} alt="logo" width={260} />
        </NavLink>

        <Navigation />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </Header>
    </div>
  );
}
