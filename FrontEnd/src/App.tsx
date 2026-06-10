import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { PagePlaceholder } from "./components/PagePlaceholder";
import "./App.css";

import Whatweoffer from "./views/Homepage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full pt-16">
        <div className="mx-auto max-w-[100%]">
          <Routes>
            <Route path="/home" element={<Whatweoffer />} />
            <Route
              path="/services"
              element={
                <PagePlaceholder
                  title="Services"
                  description="Explore how Xone Software Development helps clients build digital products."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PagePlaceholder
                  title="About"
                  description="Learn about our team, mission, and approach."
                />
              }
            />
            <Route
              path="/process"
              element={
                <PagePlaceholder
                  title="Process"
                  description="See how we plan, build, and deliver software projects."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PagePlaceholder
                  title="Contact"
                  description="Reach out to start a conversation with our team."
                />
              }
            />
            <Route
              path="/get-started"
              element={
                <PagePlaceholder
                  title="Get Started"
                  description="Tell us about your project and we'll follow up."
                />
              }
            />
            <Route path="*" element={<Whatweoffer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
