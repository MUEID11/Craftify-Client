import { NavLink } from "react-router-dom";
import logo from "../../public/vitelogo.png";
import { useEffect, useState } from "react";
import { FaBuffer } from "react-icons/fa6";
const Navbar = () => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    console.log(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("coffee");
    } else {
      setTheme("light");
    }
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
        <NavLink to="/login">login/Register</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar container mx-auto">
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
          <div className="dropdown dropdown-end group relative">
            <div
              tabIndex={0}
              role="button"
              className="group btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 sm:w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm absolute hidden group-hover:block mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
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
