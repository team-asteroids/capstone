import '../index.css';
import { Routes, Route } from 'react-router-dom';
import { Homepage, Navbar, NotFound, SignUp, LogIn, AllEvents } from './index';


function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

      </Routes>
    </div>
  );
}

export default App;
