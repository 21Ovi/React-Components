import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid } from "@nextui-org/react";

import "./DropdownMenu.css";

const DropdownMenu = (props) => {
  return (
    <div>
      <input
        class="dark-light"
        type="checkbox"
        id="dark-light"
        name="dark-light"
      />
      <label for="dark-light"></label>

      <div class="light-back"></div>

      <div class="sec-center">
        <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
        <label class="for-dropdown" for="dropdown">
          {props.text} <i class="uil uil-arrow-down"></i>
        </label>
        <div class="section-dropdown">
          <a href="#">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
          <input
            class="dropdown-sub"
            type="checkbox"
            id="dropdown-sub"
            name="dropdown-sub"
          />
          <label class="for-dropdown-sub" for="dropdown-sub">
            Dropdown Sub <i class="uil uil-plus"></i>
          </label>
          <div class="section-dropdown-sub">
            <a href="#">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
            <a href="#">
              Dropdown Link <i class="uil uil-arrow-right"></i>
            </a>
          </div>
          <a href="#">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
          <a href="#">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
