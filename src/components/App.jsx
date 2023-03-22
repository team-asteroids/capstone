import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <div className="font-rubik">
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
