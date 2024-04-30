import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { toast } from "react-toastify";
import { BiHide, BiShow } from "react-icons/bi";
import UseAuth from "../hooks/UseAuth";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");
  const { signInUser, googleLogin, gitHubLogin } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(form.get("email"));

    //reset
    setSuccess("");
    setRegisterError("");
    //sign in user

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccess(toast.success("Logged in succesfully"));
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleSocialLogin = (provider) => {
    provider()
      .then((result) => {
        console.log(result);
        setSuccess(toast.success("Login successfull"));
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setRegisterError(error.message);
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 container mx-auto my-6 shadow-blue-100 ">
        <Helmet>
          <title>Login</title>
        </Helmet>
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-600">
          Dont have account?
          <Link
            to="/signup"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            Sign up
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={() => handleSocialLogin(googleLogin)}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FaGoogle />
            <p>Login with Google</p>
          </button>
          <button
            onClick={() => handleSocialLogin(gitHubLogin)}
            aria-label="Login with GitHub"
            role="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
          >
            <FaGithub />
            <p>Login with GitHub</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
        <form
          noValidate=""
          onSubmit={handleLogin}
          action=""
          className="space-y-8"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Your email here"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  // onChange={(e) => validatePassword(e.target.value)}
                  placeholder="password"
                  name="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                  required
                />
                <div>
                  {showPass ? (
                    <BiShow
                      onClick={() => setShowPass(false)}
                      className="text-2xl absolute top-3 right-2"
                    />
                  ) : (
                    <BiHide
                      onClick={() => setShowPass(true)}
                      className="text-2xl absolute top-3 right-2"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn bg-blue-500 text-white border-none px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign in
          </button>
        </form>
        {(success && (
          <p className="text-green-500">User login successfull</p>
        )) ||
          (registerError && <p className="text-red-500">{registerError}</p>)}
      </div>
    </div>
  );
};

export default Login;
