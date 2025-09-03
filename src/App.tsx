import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import ExploreNGOs from './pages/ExploreNGOs';
import NGOProfile from './pages/NGOProfile';
import StudentOnboarding from './pages/StudentOnboarding';
import ImpactTracker from './pages/ImpactTracker';
import StudentStories from './pages/StudentStories';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<ExploreNGOs />} />
            <Route path="/ngo/:id" element={<NGOProfile />} />
            <Route path="/onboarding" element={<StudentOnboarding />} />
            <Route path="/impact" element={<ImpactTracker />} />
            <Route path="/stories" element={<StudentStories />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;