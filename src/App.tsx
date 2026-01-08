import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Possibilities from './components/Possibilities';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

// Landing page component
const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Possibilities />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Admin routes will be added here later */}
          {/* <Route path="/admin/*" element={<AdminPanel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
