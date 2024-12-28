import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";

import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Journey from "./Components/Journey/Journey";
import Loading from "./Components/Loading/Loading";
import Nav from "./Components/Navigation/Navigation";
import Plans from "./Components/Plans/Plans";
import Reviews from "./Components/Reviews/Reviews";
import FAQS from "./Components/FAQS/FAQS";
import Footer from "./Components/Footer/Footer";
import NavAr from "./Components/Navigation/NavigationAr";
import HeroAr from "./Components/Hero/HeroAr";
import ReviewsAr from "./Components/Reviews/ReviewsAr";
import AboutAr from "./Components/About/AboutAr";
import JourneyAr from "./Components/Journey/JourneyAr";
import PlansAr from "./Components/Plans/PlansAr";
import FAQSAr from "./Components/FAQS/FAQSAr";
import FooterAr from "./Components/Footer/FooterAr";
import NotFoundEn from "./Components/404/NotFound";
import NotFoundAr from "./Components/404/NotFoundAr";
import Policies from "./Components/Privacy/Policies";
import PoliciesAr from "./Components/Privacy/PoliciesAr";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Smooth scrolling duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smooth: true,
    });

    const handleScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/en" element={<EnglishVersion />} />
        <Route path="/ar" element={<ArabicVersion />} />
        <Route path="/en/*" element={<NotFoundEn />} />
        <Route path="/ar/*" element={<NotFoundAr />} />
        <Route path="*" element={<Navigate to="/en" replace />} />
        <Route path="/en/policies" element={<Policies />} />
        <Route path="/ar/policies" element={<PoliciesAr />} />
      </Routes>
    </Router>
  );
}

function EnglishVersion() {
  return (
    <div>
      <Loading />
      <Nav />
      <Hero />
      <Reviews />
      <About />
      <Journey />
      <Plans />
      <FAQS />
      <Footer />
    </div>
  );
}

function ArabicVersion() {
  return (
    <div>
      <Loading />
      <NavAr />
      <HeroAr />
      <ReviewsAr />
      <AboutAr />
      <JourneyAr />
      <PlansAr />
      <FAQSAr />
      <FooterAr />
    </div>
  );
}

export default App;
