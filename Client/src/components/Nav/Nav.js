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
    { month: "All Months", number: 0 },
    { month: "January", number: 1 },
    { month: "February", number: 2 },
    { month: "March", number: 3 },
    { month: "April", number: 4 },
    { month: "May", number: 5 },
    { month: "June", number: 6 },
    { month: "July", number: 7 },
    { month: "August", number: 8 },
    { month: "September", number: 9 },
    { month: "October", number: 10 },
    { month: "November", number: 11 },
    { month: "December", number: 12 },
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
                {monthNumberPairs[month].month}
              </DropdownToggle>
              <DropdownMenu>
                {monthNumberPairs.map((monthNumberPair) => (
                  <DropdownItem
                    className="dropdown-items"
                    key={monthNumberPair.number}
                    onClick={() => {
                      setMonth(monthNumberPair.number);
                    }}
                  >
                    {monthNumberPair.month}
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
