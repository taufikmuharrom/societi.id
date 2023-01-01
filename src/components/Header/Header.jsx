import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/societi_vertical.png'

const Header = () => {
  let location = useLocation()
  const [navbar, setNavbar] = useState(false);
  const [navMode, setNavMode] = useState("normal");

  const listenScrollEvent = () => {
    if (location.pathname === '/') {
      window.scrollY > 40 ? setNavMode("normal") : setNavMode("big");
    }
  };

  useEffect(() => {
    if (location.pathname === '/') return setNavMode("big")
    setNavMode("normal")
  }, [location])

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };

  }, []);

  return (
    <nav
      className={`w-full z-10 sticky top-0 ${navMode === 'normal' ? "shadow bg-white" : "bg-cyan-200"} `}
      style={{
        transition: "all 1s",
      }}
    >
      <div className="justify-between relative mx-auto lg:max-w-7xl px-4 md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to='/'>
              <img src={logo} className={`${navMode === 'normal' ? "w-28 md:w-32" : "w-32 md:w-40"}`} style={{
                transition: "all 1s",
              }} />

            </NavLink>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 hover:font-bold hover:scale-110 transition ease-in-out delay-150 duration-300">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold hover:scale-110 transition ease-in-out delay-150 duration-300">
                <NavLink to="/">About</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold hover:scale-110 transition ease-in-out delay-150 duration-300">
                <NavLink to="/">Contact</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold hover:scale-110 transition ease-in-out delay-150 duration-300">
                <NavLink to="/">Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
