import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../../assets/societi_vertical.png'
import { useScreen } from "../../stores";


const Header = () => {
  let location = useLocation()
  const [navbar, setNavbar] = useState(false);
  const [navMode, setNavMode] = useState("normal");
  const [screenStates, screenActions] = useScreen()

  const listenScrollEvent = () => {
    if(screenStates.screenWidth < 640) return
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
  

  const handleClickNavbar = (section) => {
    let coordinate = 0

    if (section === 'home') coordinate = 0
    if (section === 'about') screenStates.screenWidth < 640 ? coordinate = 390 : coordinate = 750
    if (section === 'program') screenStates.screenWidth < 640 ? coordinate = 1130 : coordinate = 1220

    screenActions.scrollToCoordinate(coordinate)
  }

  return (
    <nav
      className={`w-full z-10 sticky top-0 ${navMode === 'normal' ? "shadow bg-white" : "bg-cyan-200"} `}
      style={{
        transition: "all 1s",
      }}
    >
      <div className="justify-between absolute md:relative w-full md:w-auto mx-auto lg:max-w-7xl px-0 md:items-center md:flex md:px-8">
        <div>
          <div className={`flex items-center ${navMode === 'normal' ? "bg-white shadow-xl" : "bg-cyan-200"} md:shadow-none md:bg-transparent justify-between py-3 md:py-5 md:block`}>
            <NavLink to='/' className='pl-2 md:pl-0'>
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
        <div className={`${navMode === 'normal' ? "bg-white" : "bg-cyan-200"} md:bg-transparent pl-5 md:pl-0 rounded-b-xl shadow-xl md:shadow-none   w-full md:w-auto`}>
          <div
            className={`flex-1 justify-self-center py-3 md:py-0 md:block ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-5 md:flex md:space-x-5 md:space-y-0">
              <li className="text-gray-600 hover:font-bold  transition ease-in-out delay-150 duration-300" onClick={() => { handleClickNavbar("home") }}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold  transition ease-in-out delay-150 duration-300" onClick={() => { handleClickNavbar("about") }}>
                <NavLink to="/">About</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold  transition ease-in-out delay-150 duration-300" onClick={() => { handleClickNavbar("program") }}>
                <NavLink to="/">Program</NavLink>
              </li>
              <li className="text-gray-600 hover:font-bold  transition ease-in-out delay-150 duration-300" onClick={() => { handleClickNavbar("contact") }}>
                <NavLink to="/">Contact</NavLink>
              </li>
              {/* <li className="text-gray-600 hover:font-bold  transition ease-in-out delay-150 duration-300">
                <NavLink to="/">Blog</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
