import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar, NotFound, SignUp, LogIn } from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
