import { Link, NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import logo from "../../public/vitelogo.png";
import { useEffect, useState } from "react";
import { FaBuffer } from "react-icons/fa6";
import { toast } from "react-toastify";

const Navbar = () => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("coffee");
    } else {
      setTheme("light");
    }
  };
  const { user, logOutUser, loading } = UseAuth();
  const handleSignOut = () => {
    logOutUser()
      .then((result) => {
        toast.error("User logged out", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allart">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/addcraft">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/myart">My Art&Craft List</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar container mx-auto relative z-[30]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden px-2">
              <FaBuffer />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>
          <NavLink
            to="/"
            className="sm:text-xl font-bold flex items-center cursor-pointer"
          >
            <img src={logo} className="w-[25px] sm:w-[50px] mr-1" alt="logo" />
            Caftify
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          {loading ? (
            <span className="text-purple-600 loading loading-infinity loading-lg"></span>
          ) : (
            <div>
              {user ? (
                <div className="dropdown dropdown-end group relative">
                  <div
                    tabIndex={0}
                    role="button"
                    className="group btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 sm:w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm absolute hidden group-hover:block top-8 z-[10] mt-4 -left-44 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a className="justify-between">
                        {user?.displayName}
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>{user?.email}</a>
                    </li>
                    <li>
                      <Link to="/login">
                        <button onClick={handleSignOut}>Logout</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="space-x-2 flex items-center mr-2">
                  <Link
                    to="/login"
                    type="button"
                    className="btn bg-violet-500 btn-xs sm:btn-sm rounded text-white"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    type="button"
                    className="btn bg-violet-600 btn-xs sm:btn-sm rounded text-white"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}
          <input
            onChange={handleToggle}
            checked={theme === "coffee"}
            type="checkbox"
            className="toggle toggle-sm sm:toggle-md theme-controller bg-base-content row-start-1 col-start-1 col-span-2 ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
