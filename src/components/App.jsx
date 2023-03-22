import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar, NotFound, Map } from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </div>
  );
}

export default App;
