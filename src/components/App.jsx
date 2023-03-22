import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar, NotFound, AllEvents } from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/events" element={<AllEvents />} />
      </Routes>
    </div>
  );
}

export default App;
