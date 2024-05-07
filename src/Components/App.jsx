import "../CSS/App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, HashRouter as Router, Outlet } from "react-router-dom";
import IntroPage from "./General/Intro";
import Start from "./Start.jsx";
import ContactForm from "./Contact/Contact.jsx";
import Technicals from "./Technicals/Technicals";
import Projects from "./Projects/Projects.jsx";
import NoPage from "./NoPage.jsx";
import Footer from "./Footer.jsx";
import Quiz from "./Quiz.jsx";
import { setScreensize } from "../Redux/Actions.jsx";
import NavBar from "./Navbar.jsx";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const dispatch = useDispatch();

  //Handle Resize for responsive design//
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let size = "";
      if (width < 550) {
        size = "small";
      } else if (width >= 550 && width < 900) {
        size = "medium";
      } else {
        size = "large";
      }
      console.log(size);
      dispatch(setScreensize(size));
    };

    handleResize();

    window.addEventListener("resize", handleResize);
  }, [setScreensize]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route element={<Layout />}>
          <Route exact path="/Intro" element={<IntroPage />} />
          <Route exact path="/Technicals" element={<Technicals />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<ContactForm />} />
          <Route exact path="/Quiz" element={<Quiz />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
