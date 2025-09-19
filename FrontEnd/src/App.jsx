import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";

import Whatweoffer from "./views/Homepage";

const Services = () => <div className="p-4">Services Page</div>;
const About = () => <div className="p-4">About Page</div>;
const Process = () => <div className="p-4">Process Page</div>;
const Contact = () => <div className="p-4">Contact Page</div>;
const GetStarted = () => <div className="p-4">Get Started Page</div>;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16 w-full">
        <div className="max-w-[100%] mx-auto">
          <Routes>
            <Route path="/home" element={<Whatweoffer />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="*" element={<Whatweoffer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
