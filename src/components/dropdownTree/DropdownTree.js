import "../../index.css";
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";

import React from "react";

import Navbar from "./Navbar";
import NavbarItem from "./NavbarItem";
import DropdownMenu from "./DropdownMenu";

const DropdownTree = () => {
  return (
    <Navbar>
      <NavbarItem icon={<PlusIcon />} />
      <NavbarItem icon={<BellIcon />} />
      <NavbarItem icon={<MessengerIcon />} />

      <NavbarItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavbarItem>
    </Navbar>
  );
};

export default DropdownTree;
