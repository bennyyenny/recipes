import React, { useState } from "react";
import { Link } from "react-router-dom";
import homeSVG from '../svg/home.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav>
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Home link */}
            <Link to="/" className="flex-shrink-0">
              <img src={homeSVG} alt="Home SVG" className="w-3/4 md:w-auto" />
            </Link>

            {/* Navigation links */}
            <div className={`sm:flex ${isOpen ? "block" : "hidden"}`}>
              <div className="ml-4 flex items-center">
                <Link
                  to="/generate-recipe"
                  className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium md:text-lg"
                >
                  Generate Recipe
                </Link>
                <Link
                  to="/view-recipes"
                  className="hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium md:text-lg"
                >
                  View Recipes
                </Link>
              </div>
            </div>

                        {/* Hamburger menu button */}
                        <div className="-mr-2 flex sm:hidden">
              <button
                type="button"
                className="text-gray-800 hover:text-gray-900 focus:outline-none"
                onClick={toggleNavbar}
              >
                {/* Conditionally render SVG based on isOpen state */}
                {isOpen ? (
                  <svg
                    className="h-6 w-6 fill-current text-black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 fill-current text-black"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6L20 6V5L4 5V6ZM20 11L4 11V10L20 10V11ZM20 16L4 16V15L20 15V16Z"
                    />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
