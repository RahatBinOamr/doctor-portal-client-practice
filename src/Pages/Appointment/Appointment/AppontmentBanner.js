import React from "react";
import img from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

import bg from '../../../assets/images/bg.png'
const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
 
  return (
    <header style={{background:`url(${bg})`}} className="my-6">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
         
          </div>

        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
