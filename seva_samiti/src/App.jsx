import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import NewsSections from "./NewsSections";
import EventsSections from "./EventsSections";
import EventsSection from "./EventsSection";
import AchievementsSection from "./AchievementsSection";
import GallerySection from "./GallerySection";
import CommitteeSection from "./CommitteeSection";
import ContactSection from "./ContactSection";
import AboutUs from "./AboutUs";

function HomePage() {
  return (
    <>
      <HeroSection />
     
      <EventsSection />
      
      <AchievementsSection />
      
      <CommitteeSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsSections/>} />
            <Route path="/events" element={<EventsSections />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/achievements" element={<AchievementsSection />} />
            <Route path="/gallery" element={<GallerySection />} />
            <Route path="/committee" element={<CommitteeSection />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </main>
        <Footer />
        <style jsx>{`
          .page-container {
            background-color: rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            align-items: center;
            min-height: 100vh;
          }
          .content {
            flex: 1;
            width: 100%;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;