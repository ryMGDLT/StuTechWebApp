import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm w-full">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center gap-6">
              <img 
                src="/Logo.png" 
                alt="StuTech Logo" 
                className="h-10 w-auto ml-20" 
              />
              <span className="text-blue-700 font-bold text-xl">StuTech</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-base font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-base font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-base font-medium">
              About
            </Link>
            <Link to="/process" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-base font-medium">
              Process
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-blue-700 px-3 py-2 text-base font-medium">
              Contact
            </Link>
          </div>
          
          {/* Get Started Button */}
          <div>
            <Link to="/get-started" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full text-sm font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
