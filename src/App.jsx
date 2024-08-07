import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import CircleLoader from "react-spinners/CircleLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1900);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#011c38"}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <div>
                {/* <Nav /> */}
                {/* <MoveToTop /> */}
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Project" element={<Project />} />
                  <Route path="/Contact" element={<Contact />} />
                </Routes>
                {/* <Footer /> */}
              </div>
            </CSSTransition>
          </TransitionGroup>
        </>
      )}
    </div>
  );
}

export default App;
