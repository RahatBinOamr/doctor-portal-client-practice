import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
    return (
        <div   className=" hero bgImg ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt=''/>
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;