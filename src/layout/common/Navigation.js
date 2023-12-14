import React from "react";
// import { useAuth } from "hooks";
import { Link } from "../../components/ui/Link";

const Navigation = ({ setItem }) => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/login">login</Link>
      {/* <Link to="/register">register</Link> */}
      <Link to="/create">create</Link>
      <Link to="/catalog">каталог</Link>
      <Link to="/servis">сервіс</Link>
      <Link to="/renovation">ремонт</Link>

      {/* {isLoggedIn && <Link to="/contacts">contacts</Link>} */}
    </nav>
  );
};

export default Navigation;
