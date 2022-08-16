import React, { useState, useEffect } from "react";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import { AllMenus } from "./AllMenuContext";

const Menus = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AllMenus>
        <SpecialDishes />
        <FilteredDishes />
      </AllMenus>
    </div>
  );
};

export default Menus;
