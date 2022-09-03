import { Menu, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store";

const Navbar = () => {
  const location = useLocation();
  const { loginStore } = useStore();

  const items: MenuProps["items"] = [
    {
      label: <Link to="/">Home</Link>,
      key: "/",
    },
    {
      label: <Link to="/accounts">Accounts</Link>,
      key: "/accounts",
    },
    {
      label: <Link to="/cards">Cards</Link>,
      key: "/cards",
    },
    {
      label: <Link to="/profile">Profile</Link>,
      key: "/profile",
    },
    {
      label: (
        <Link to="/login" onClick={() => loginStore.logout()}>
          Logout
        </Link>
      ),
      key: "/login",
    },
  ];
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" items={items} />
  );
};

export default Navbar;
