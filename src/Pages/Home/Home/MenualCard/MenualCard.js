import React from "react";
import img from "../../../../assets/images/treatment.png";
const MenualCard = () => {
  return (
    <div className="hero-content flex-col gap-10 lg:flex-row-reverse mt-9">
     
      <div className="">
        <h1 className="text-5xl font-bold">Exceptional Dental care , your terms </h1>
        <p className="py-6">
        Tooth decay and gum disease are caused by plaque, a sticky combination of bacteria and food. Plaque begins to build up on teeth within a few minutes after eating. If teeth are not cleaned well each day, plaque will lead to tooth decay or gum disease. 
        </p>
        <button
          className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
        >
          Get Started
        </button>
      </div>
      <img
        src={img}
        className="sm:w-full lg:w-1/2 rounded-lg shadow-2xl"
        alt=""
      />
    </div>
  );
};

export default MenualCard;
