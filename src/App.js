import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Loading from "./Components/Loading/Loading";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Journey from "./Components/Journey/Journey";
import Nav from "./Components/Navigation/Navigation";
import Plans from "./Components/Plans/Plans";
import Reviews from "./Components/Reviews/Reviews";
import FAQS from "./Components/FAQS/FAQS";
import Footer from "./Components/Footer/Footer";
import AboutAr from "./Components/About/AboutAr";
import HeroAr from "./Components/Hero/HeroAr";
import JourneyAr from "./Components/Journey/JourneyAr";
import NavAr from "./Components/Navigation/NavigationAr";
import PlansAr from "./Components/Plans/PlansAr";
import ReviewsAr from "./Components/Reviews/ReviewsAr";
import FAQSAr from "./Components/FAQS/FAQSAr";
import FooterAr from "./Components/Footer/FooterAr";
import Policies from "./Components/Privacy/Policies";
import PoliciesAr from "./Components/Privacy/PoliciesAr";
import Checkout from "./Components/Checkout/Checkout";
import CheckoutAr from "./Components/Checkout/CheckoutAr";

function App() {
  const lenisRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    lenisRef.current = lenis;

    const handleScroll = (time) => {
      if (!isLoading) {
        lenis.raf(time);
      }
      requestAnimationFrame(handleScroll);
    };

    requestAnimationFrame(handleScroll);

    return () => {
      lenis.destroy();
    };
  }, [isLoading]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route
          path="/en"
          element={
            <EnglishVersion
              lenis={lenisRef.current}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/ar"
          element={
            <ArabicVersion
              lenis={lenisRef.current}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/en/policies"
          element={<Policies lenis={lenisRef.current} />}
        />
        <Route
          path="/ar/policies"
          element={<PoliciesAr lenis={lenisRef.current} />}
        />
        <Route
          path="/en/checkout/:cardIndex"
          element={<ProtectedRoute component={Checkout} />}
        />
        <Route
          path="/ar/checkout/:cardIndex"
          element={<ProtectedRoute component={CheckoutAr} />}
        />
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute({ component: Component }) {
  const locationState = window.history.state?.usr;

  if (!locationState) {
    return <Navigate to="/en" replace />;
  }

  return <Component />;
}

function EnglishVersion({ lenis, setIsLoading }) {
  return (
    <div>
      <Loading lenis={lenis} setIsLoading={setIsLoading} />
      <Nav />
      <Hero lenis={lenis} />
      <Reviews />
      <About />
      <Journey />
      <Plans />
      <FAQS />
      <Footer />
    </div>
  );
}

function ArabicVersion({ lenis, setIsLoading }) {
  return (
    <div>
      <Loading lenis={lenis} setIsLoading={setIsLoading} />
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
