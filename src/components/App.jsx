import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar, NotFound } from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
