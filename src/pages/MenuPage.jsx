import React from 'react';
import MenuCard from "../components/MenuCard"

const MenuPage = () => {
  const categories = [
    { title: "Breakfast", items: ["Dosa", "Sandwich", "Chai"] },
    { title: "Lunch & Dinner", items: ["Indian Cuisine", "Chinese Cuisine", "South Indian"] },
    { title: "Snacks", items: ["Tandoori Snacks", "Dosa", "Chat Corner", "Sandwich"] },
    { title: "Beverages & Sweets", items: ["Coffee Corner", "Sweet Corner"] },
  ];

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <MenuCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPage;