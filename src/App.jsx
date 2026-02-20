import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Login from './Login';
import Register from './Register';
import './App.css'; 
import Categories from './Categories';
import UpcomingEvents from './UpcomingEvents';
import EventDetails from './EventDetails';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <UpcomingEvents />
            
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/event" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;