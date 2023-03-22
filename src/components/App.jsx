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
  BrowseGroups,
  SingleGroup,
} from './index';

function App() {
  return (
    <div className="font-rubik">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/groups" element={<BrowseGroups />} />
        <Route path="/groups/:groupId" element={<SingleGroup />} />
      </Routes>
    </div>
  );
}

export default App;
