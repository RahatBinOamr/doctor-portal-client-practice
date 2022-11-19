import React from "react";
import img from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'


const MakeAppoinment = () => {
  return (
    <section className="mt-16 p-10" style={{
        background:`url(${appointment})`
    }}>
      <div className="hero-content text-white flex-col gap-10 lg:flex-row-reverse">
      <img
          src={img}
          className="-mt-32 sm:w-full hidden lg:block lg:w-1/3 rounded-lg shadow-2xl"
          alt=""
        />
        <div className="w-1/2">
            <h4 className="text-primary font-bold font-2xl"> appointment</h4>
          <h1 className="text-4xl font-bold">
           Make appointment today 
          </h1>
          <p className="py-6">
            Tooth decay and gum disease are caused by plaque, a sticky
            combination of bacteria and food. Plaque begins to build up on teeth
            within a few minutes after eating. If teeth are not cleaned well
            each day, plaque will lead to tooth decay or gum disease.
          </p>
          <button
            className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
               from-yellow-400 via-green-500 to-blue-500 text-white"
          >
            Get Started
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default MakeAppoinment;
