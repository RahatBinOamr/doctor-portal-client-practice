import React from "react";
import img from "../../../assets/images/appointment.png";
const ContactUsFrom = () => {
  return (
    <div>
      <div style={{ background: `url(${img})` }} className="hero  p-10 ">
        <div className="hero-content  ">
         
          <div className=" flex-shrink-0 w-full  shadow-2xl ">
          <div className="text-center text-white">
            <h1 className="text-4xl text-primary  font-bold">Contact Us</h1>
            <p className="py-6  text-xl">stay concat with as </p>
          </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="subject"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Your message</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class=" p-2.5 w-full text-sm text-bordered rounded-lg border border-gray-300 "
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsFrom;
