import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Building from './Building';
import Neighborhood from './Neighborhood';
import Gallery from './Gallery';
import Amenities from './Amenities';
import Enquire from './Coponents/Enquire';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Building" element={<Building />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/Enquire" element={<Enquire />} />

      </Routes>
    </div>
  );
}

export default App;
