import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar } from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
