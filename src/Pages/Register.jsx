import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, googleLogin, gitHubLogin } = UseAuth();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    if (!/(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/.test(password)) {
      setError(
        "Password must be at least 6 characters long and contain at least one special character and one uppercase letter."
      );
      toast.error(
        "Password must be at least 6 characters long and contain at least one special character and one uppercase letter."
      );
      return;
    }
      //reset error
      setError("");
      setSuccess("");
    createUser(email, password, name, photo).then((currentUser) => {
      console.log(currentUser);
      navigate(location?.state ? location.state : "/");
    }).catch(error => toast.error(error.message))
  };
  const socialLogin = (socialProvider) =>{
    socialProvider()
    .then(result =>{
        console.log(result)
    })
  }
  return (
    <div className="container mx-auto w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800 m-10">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Register to your account
      </h2>
      <p className="text-sm text-center dark:text-gray-600">
        Already have account?
        <NavLink
          to="/login"
          rel="noopener noreferrer"
          className="focus:underline hover:underline"
        >
          Login here
        </NavLink>
      </p>
      <div className="my-6 space-y-4">
        <button
        onClick={() =>socialLogin(googleLogin)}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <FaGoogle />
          <p>Login with Google</p>
        </button>
        <button
        onClick={() =>socialLogin(gitHubLogin)}
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
      <form noValidate="" action="" className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm">
              Email address
            </label>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Your name here"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="photo" className="block text-sm">
              Email address
            </label>
            <input
              type="text"
              required
              name="photo"
              id="photo"
              placeholder="Photo URL"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              required
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-2 relative">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              required
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div>
              {showPass ? (
                <FaEye
                  onClick={() => setShowPass(false)}
                  className="absolute top-10 right-4"
                />
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPass(true)}
                  className="absolute top-10 right-4"
                />
              )}
            </div>
          </div>
        </div>
        <button
        onSubmit={handleRegister}
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-500 hover:bg-violet-700 dark:bg-violet-600 dark:text-gray-50 text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Register;
