import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import EventDetail from './pages/EventDetail';
import './App.css';
import EventForm from './pages/AddEvent';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events/:eventId" element={<EventDetail />} />
          <Route path="/addEvent" element={<EventForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
