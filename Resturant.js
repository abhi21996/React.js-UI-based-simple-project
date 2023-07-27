import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

//useState hooks ka kaam hai ke kisi bhi data ko get karke rakhna apne paas hold karke rakhna. useState returns an array of two elements. sabse pehela element hota hai apka state variable. Aur second element jo hota hai vo hota hai updated function. Apke react application me jo date hai vo manage karne ke lie we use usestate. useState ke andar jo bhi initial data hoga vo state variable ka current data kehelayega. Jab aap hooks use karoge to const [menuData, setMenuData] = useState(Menu); ye aapke functional component ka pehela data hona chahiye.

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  //yahape Menu jo hai vo menu data ke andar hai. Hume ye menu menucard me pass karna hai aur usko loop pe chala dena hai. menucard me jo card banaya hai hume ek hi card banake usko jitne bhi items hai utne baar loop pe chalane ke lie props ka use karna padega

  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {

    // function ko call kar dia aur category pass kar dia.

    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  // curElem me jo bhi current element hoga vo hume milega. agar jo current element hai uske andar jo category hai vo array of category mese kisi bhi category se match karta hai to mai sirf usiko hi return karna chahunga 

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />

      {/* // hum chahate hai ke MeenuCard nam ka jo component hai usme hume menuData me jo data hai vo mil jae
props kaise pass karte hai -- sabse pehele jo bhi apka data hai usko copy karo as a attribute = into the curly braces jo bhi data hai usko pass kardena hai.
Toh ye ek trick hai jiske through hum data pass kar sakte hai from one component to other component/ from parents to child.
jo naam aapne as a attribute pass kia hai usiko copy karo aur jis component me pass kar rhe ho us componentme as a parameter in curle braces pass karo */}

    </>
  );
};

export default Resturant;