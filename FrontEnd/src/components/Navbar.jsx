import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/home" className="flex items-center gap-6">
              <img 
                src="/Logo.png" 
                alt="StuTech Logo" 
                className="h-10 w-auto ml-20" 
              />
              <span className="text-blue-700 font-bold text-xl">StuTech</span>
            </NavLink>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-center flex-1 ml-2 fixed left-1/2 transform -translate-x-1/2">
            <NavLink 
              to="/home" 
              className={({ isActive }) => 
                `px-10 py-2 text-base font-medium ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `px-10 py-2 text-base font-medium ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-10 py-2 text-base font-medium ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700'}`
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/process" 
              className={({ isActive }) => 
                `px-10 py-2 text-base font-medium ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700'}`
              }
            >
              Process
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-10 py-2 text-base font-medium ${isActive ? 'text-blue-700' : 'text-gray-900 hover:text-blue-700'}`
              }
            >
              Contact
            </NavLink>
          </div>
          
          {/* Get Started Button */}
          <div>
            <NavLink 
              to="/get-started" 
              className="bg-blue-700 hover:bg-blue-900 text-white px-8 mr-22 py-2 rounded-full text-sm font-medium"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;