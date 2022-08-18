import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import SpecialDishes from "./SpecialDishes";
import { AllMenus } from "./AllMenuContext";
import Hero from "./Hero";


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
