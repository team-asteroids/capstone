import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  addRsvpAsync,
  fetchSingleEvent,
  selectSingleEvent,
  getMyRsvpsAsync,
  selectMyRsvps,
  removeRsvpAsync,
} from '../../slices/eventsSlice';
import { selectAuth } from '../../slices/authSlice';
import defaultImg from '../../img/group-puppies-celebrating-new-year.jpg';

const EventDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const event = useSelector(selectSingleEvent);
  const auth = useSelector(selectAuth);
  const myRsvps = useSelector(selectMyRsvps);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleEvent(id));
      setLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getMyRsvpsAsync());
      setLoading(false);
    };
    fetchData();
  }, [dispatch, id]);

  const alreadyRSVPd = myRsvps.filter((rsvp) => rsvp.eventId === event.id);
  console.log(alreadyRSVPd);

  if (!auth.userAuth) {
    return (
      <>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className=" bg-bold-purple h-screen w-screen text-slate-200 items-center">
            <div className="bg-bold-blue pl-5 flex pt-3 pb-3  font-rubikmono ">
              <span className="pr-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </span>
              Event Details
            </div>
            <div className="pl-5 pt-3  container mx-auto relative">

              <img className="w-100 " src={defaultImg} alt="puppy event" />

              <div className="p-1">Topic: {event.topic}</div>
              <div className="p-1">Event Creator: @howlr_{event.creatorId}</div>
              <div className="p-1 ">
                Description: {event.description}
                {event.description}
                {event.description}
              </div>

              <button className="ease-in duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3">
                <Link to={'/login'}>Login to RSVP</Link>
              </button>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className=" bg-bold-purple h-screen w-screen text-slate-200 items-center">
            <div className="bg-bold-blue pl-5 flex pt-3 pb-3  font-rubikmono ">
              <span className="pr-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </span>
              Event Details
            </div>
            <div className="pl-3 pt-3  container mx-auto relative">
              <img
                className="w-100 rounded-3xl"

                src={defaultImg}

                alt="puppy event"
              />
              <div className="p-1">
                <strong>PUP-E-VENT:</strong> {event.topic}
              </div>
              <div className="p-1">
                <strong>PACK LEADER:</strong> @howlr_{event.creatorId}
              </div>
              <div className="p-1 ">
                <strong>DESCRIPTION:</strong> Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Massa massa ultricies mi quis
                hendrerit dolor magna eget. Fermentum dui faucibus in ornare.
                Sed viverra ipsum nunc aliquet bibendum. Felis donec et odio
                pellentesque. Pulvinar sapien et ligula ullamcorper malesuada
                proin libero.
              </div>
              <div>
                <strong>THE PACK:</strong>
              </div>
              <ul>
                {event.users.length ? (
                  event.users.map((user) => (
                    <li key={user.id}>@howlr_{user.id}</li>
                  ))
                ) : (
                  <p>No HOWLR's...yet</p>
                )}
              </ul>
              {!alreadyRSVPd.length ? (
                <button
                  className="ease-in duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3"
                  onClick={() => {
                    dispatch(addRsvpAsync(event.id));
                    window.location.reload(false);
                  }}
                >
                  RSVP
                </button>
              ) : (
                <button
                  className="ease-in duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3"
                  onClick={() => {
                    dispatch(removeRsvpAsync(event.id));
                    window.location.reload(false);
                  }}
                >
                  Remove RSVP
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
};
export default EventDetails;
