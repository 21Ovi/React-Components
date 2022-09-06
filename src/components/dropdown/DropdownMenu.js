import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropdownMenu = () => {
  const [dropdownText, setdropdownText] = useState("Dropdown Menu");

  const handleSelect = (e) => {
    setdropdownText(e);
  };

  return (
    <DropdownButton
      align="end"
      title={dropdownText}
      id="dropdown-menu-align-end"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="Action" value="Action">
        Action
      </Dropdown.Item>
      <Dropdown.Item eventKey="Another Action">Another action</Dropdown.Item>
      <Dropdown.Item eventKey="Something else here">
        Something else here
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="Separated link">Separated link</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropdownMenu;
