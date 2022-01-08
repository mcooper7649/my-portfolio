import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between p-3 bg-orange-400">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="mx-3 w-full relative flex justify-between lg:w-auto lg:static lg:justify-start">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inline-flex items-center py-6 text-blue-500 hover:text-blue-800  text-4xl font-bold cursive tracking-widest"
            >
              <i className="fas fa-user-ninja fa-2x px-2 "></i>
              <span className="text-4xl md:text-5xl text-blue-100">M</span>
              <span className="text-4xl md:text-5xl">y</span>
              <span className="text-4xl md:text-5xl text-blue-100">C</span>
              <span className="text-4xl md:text-5xl">ode</span>
              <span className="text-4xl md:text-5xl text-blue-100">D</span>
              <span className="text-4xl md:text-5xl">ojo</span>
            </NavLink>
            <button
              className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-med uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/post"
                >
                  <i className="fas fa-blog text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-med uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/project"
                >
                  <i className="fas fa-folder-open text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Projects</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-med uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  <i className="fas fa-user-circle text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
