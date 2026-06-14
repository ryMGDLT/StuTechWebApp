import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Homepage from "./views/Homepage";

const ServicesPage = lazy(() =>
  import("./features/services/components/ServicesPage").then((module) => ({
    default: module.ServicesPage,
  })),
);
const AboutPage = lazy(() =>
  import("./features/about/components/AboutPage").then((module) => ({
    default: module.AboutPage,
  })),
);
const ProcessPage = lazy(() =>
  import("./features/process/components/ProcessPage").then((module) => ({
    default: module.ProcessPage,
  })),
);
const ContactPage = lazy(() =>
  import("./features/contact/components/ContactPage").then((module) => ({
    default: module.ContactPage,
  })),
);
const GetStartedPage = lazy(() =>
  import("./features/get-started/components/GetStartedPage").then((module) => ({
    default: module.GetStartedPage,
  })),
);

function RouteFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center text-muted-foreground"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="w-full overflow-x-hidden pt-16">
        <div className="mx-auto max-w-[100%]">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/home" element={<Homepage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/get-started" element={<GetStartedPage />} />
              <Route path="*" element={<Homepage />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
