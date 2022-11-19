import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login.png";
import bg from "../../../assets/images/bg.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthUser";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../../Hooks/useToken";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn,googleLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const [loginUserEmail,setLoginUserEmail]=useState('')
  const [token]=useToken(loginUserEmail)

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
if(token){
  navigate(from, { replace: true });
}
  

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email)
        toast.success('login successfully')
        
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const handelGoogle = () => {
    googleLogin()
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        toast.success('google login successfully')
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage)
      });
  };
  return (
    <div style={{ background: `url(${bg})` }} className="hero min-h-screen ">
      <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
        <div className=" lg:text-left">
          <img className="w-full lg:w-2/3 " src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center text-primary font-bold">
            Login now!
          </h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="card-body">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  {" "}
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
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
                      message: "Password must be 6 characters or longer",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {" "}
                  <span className="label-text">Forget Password?</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <div>
                {loginError && <p className="text-red-600">{loginError}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    {" "}
                    if you have no account please{" "}
                    <Link className="text-primary" to="/register">
                     Create account
                    </Link>{" "}
                  </span>
                </label>
              </div>
              <button
                className="btn btn-primary h-12  bg-gradient-to-tr rounded-lg
                from-yellow-400 via-green-500 to-blue-500 text-white"
              >
                Login
              </button>
              
             
              <button
              onClick={handelGoogle}
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

export default Login;
