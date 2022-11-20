import React from "react";
const AppointmentOption = ({ appointment,   setTreatment }) => {
  //   console.log(appointment);
  const { name, slots,price } = appointment;
  return (
    <div className="card  bg-base-100 p-4  shadow-xl">
      <div className="card-body  text-center">
        <h2 className="text-2xl font-bold text-primary text-center">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <p> price:${price} </p>
        <div className="card-actions justify-end">
          <label
          disabled ={slots.length===0}
            htmlFor="booking-modal"
            onClick={() =>  setTreatment(appointment)}
            className="btn btn-primary h-12 w-full bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
