import React from "react";

const navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
{/* jab bhi hum button pe click karenge filterItem function call ho jaega. jab bhi aap function ko call karte ho and then agar aap usme kuch argument pass kar rhe ho better go with fat arrow function so that vo apne aapko baar baaar call karte na baithe*/}
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default navbar;