"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };
        const isOpen = activeIndex === index;
        return (
          <NavItem
            key={category.value}
            category={category}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            handleOpen={handleOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
