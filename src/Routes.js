import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownTree from "./components/dropdownTree/DropdownTree";

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          exact
          path="/dropdownMenu"
          element={<DropdownMenu text={"DropDown Menu"} />}
        />
        <Route exact path="/dropdownTree" element={<DropdownTree />} />
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
