import '../index.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { attemptTokenLogin, selectAuth } from '../slices/authSlice';
import {
  Homepage,
  Navbar,
  NotFound,
  SignUp,
  LogIn,
  AllEvents,
  Map,
  EventDetails,
  BrowseGroups,
  SingleGroup,
  UserAccount,
  UserProfile,
  Footer,
} from './index';
import Chat from './ui/Chat';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(attemptTokenLogin());
  }, []);

  const { userAuth } = useSelector(selectAuth);

  return (
    <div className="font-rubik">
      <Navbar userAuth={userAuth} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/groups" element={<BrowseGroups />} />
        <Route path="/groups/:groupId/*" element={<SingleGroup />} />
        <Route path="/account/*" element={<UserAccount />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
