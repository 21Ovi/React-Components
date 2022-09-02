import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DropdownMenu from "./components/dropdown/DropdownMenu";

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
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoute;
