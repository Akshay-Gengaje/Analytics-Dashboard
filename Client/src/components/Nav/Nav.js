import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "./Nav.css";
const Nav = (props) => {
  const { month, setMonth } = props;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const monthNumberPairs = [
    { name: "All Months", number: 0 },
    { name: "January", number: 1 },
    { name: "February", number: 2 },
    { name: "March", number: 3 },
    { name: "April", number: 4 },
    { name: "May", number: 5 },
    { name: "June", number: 6 },
    { name: "July", number: 7 },
    { name: "August", number: 8 },
    { name: "September", number: 9 },
    { name: "October", number: 10 },
    { name: "November", number: 11 },
    { name: "December", number: 12 },
  ];

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 d-flex justify-content-center">
          <div className=" col-md-10  nav">
            <h3>Transctions Dashboard</h3>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
              <DropdownToggle caret className="dropdown-btn">
                {monthNumberPairs[month.number].name}
              </DropdownToggle>
              <DropdownMenu>
                {monthNumberPairs.map((monthNumberPair) => (
                  <DropdownItem
                    className="dropdown-items"
                    key={monthNumberPair.number}
                    onClick={() => {
                      setMonth(monthNumberPair);
                    }}
                  >
                    {monthNumberPair.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
