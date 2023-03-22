import '../index.css';
import { Routes, Route } from 'react-router-dom';
import {
  Homepage,
  Navbar,
  NotFound,
  SignUp,
  LogIn,
  AllEvents,
  Map,
} from './index';

function App() {
  return (
    <div className="font-rubikmono">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
