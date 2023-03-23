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
  PostsView,
  MemberView,
} from './index';

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
        <Route path="/account" element={<UserAccount />} />
        {/* <Route path="/groups/:groupId/posts" element={<PostsView />} />
        <Route path="/groups/:groupId/members" element={<MemberView />} /> */}
      </Routes>
    </div>
  );
}

export default App;
