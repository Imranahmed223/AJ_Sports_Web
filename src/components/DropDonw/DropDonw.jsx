import React, { useState } from "react";
import "./DropDonw.scss";
import { BiChevronDown } from "react-icons/bi";
const DropDonw = ({ selected, setSelected, arr, handleDropDown }) => {
  const [isActive, setIsActive] = useState(false);
  //   const options = ["React", "Vue", "Angular"];
  const options = arr;

  // const handleDropDown=("arabic")=>{

  // }
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <BiChevronDown style={{ fontSize: "2rem" }} />
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <>
                <div
                  className="dropdown-item"
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                >
                  {option}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDonw;
