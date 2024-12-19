import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/en" element={<EnglishVersion />} />
        <Route path="/ar" element={<ArabicVersion />} />
        <Route path="/" element={<NotFoundEn />} /> {/* English 404 */}
        <Route path="/en/*" element={<NotFoundEn />} /> {/* English 404 */}
        <Route path="/ar/*" element={<NotFoundAr />} /> {/* Arabic 404 */}
        <Route path="*" element={<Navigate to="/en" replace />} />{" "}
        {/* Default to English */}
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
