import React from "react";

const Comment = ({ comment }) => {
  const { name, description, something, img } = comment;
  return (
   
      
     
      <div className="card  p-10   shadow-xl">
        <div>
          <p className=""> {description} </p>
        </div>
        <div className="mt-10 items-center gap-5 flex sm:flex-col   lg:flex-row  ">
          <img className="rounded-full ring ring-primary sm:w-1/4 " src={img} alt="" />
          <div>
            <h6 className="font-bold ">{name}</h6>
            <p>{something} </p>
          </div>
        </div>
      </div>
      
  );
};

export default Comment;
