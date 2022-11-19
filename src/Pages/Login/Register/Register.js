import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login.png";
import bg from "../../../assets/images/bg.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthUser";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../../Hooks/useToken";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail,setCreatedUserEmail]=useState('')
  const [token]=useToken(createdUserEmail)
  const navigate = useNavigate();
  if(token){
    navigate('/')
  }
  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("register successfully");
        saveUser(data.email,data.name)
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
        toast.success('google login successfully')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage)
      });
  };
  const saveUser =(email,name)=>{
    const user = {email,name}
    fetch(`http://localhost:5000/users`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setCreatedUserEmail(email)

    })
    .catch(err=>console.error(err))
  }
  
  return (
    <div style={{ background: `url(${bg})` }} className="hero min-h-screen ">
      <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
        <div className=" lg:text-left">
          <img className="w-full lg:w-2/3 " src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center text-primary font-bold">
            Register now!
          </h1>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", {
                    required: "Name is Required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </div>
              <div className="form-control">
                {signUpError && <p className="text-red-600">{signUpError}</p>}
                <label className="label">
                  <span className="label-text ">
                    {" "}
                    if you have an account please{" "}
                    <Link className="text-primary" to="/login">
                      login
                    </Link>{" "}
                  </span>
                </label>
              </div>
              <button
                className="btn btn-primary  h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
              >
                Register
              </button>
              <button onClick={handelGoogle}
                className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
              >
                Google Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
