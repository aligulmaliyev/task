import { Menu, MenuProps } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
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
  ];
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" items={items} />
  );
};

export default Navbar;
