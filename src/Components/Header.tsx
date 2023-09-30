import React from "react";
import { useData } from "../Context/DataContext";
import DataRange from "./DataRange";

const Header = () => {
  return (
    <div>
      <DataRange />
    </div>
  );
};

export default Header;
