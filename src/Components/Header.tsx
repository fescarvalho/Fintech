import React from "react";

import DataRange from "./DataRange";
import Meses from "./Meses";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DataRange />
      </div>
      <Meses />
    </header>
  );
};

export default Header;
