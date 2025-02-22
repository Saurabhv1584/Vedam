import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Building from './Building';
import Gallery from './Gallery';
import Amenities from './Amenities';
import Enquire from './Coponents/Enquire';
import WhatSetUsApart from './WhatSetUsApart';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Building" element={<Building />} />
        <Route path="/Amenities" element={<Amenities />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Enquire" element={<Enquire />} />
        <Route path="/WhatSetUsApart" element={<WhatSetUsApart />} />

      </Routes>
    </div>
  );
}

export default App;
