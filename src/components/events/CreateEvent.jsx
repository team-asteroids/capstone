import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { createEventAsync } from '../../slices/eventsSlice';

const CreateEvent = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [eventStart, setEventStart] = useState('');
  const [eventEnd, setEventEnd] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [zipCode, setZipCode] = useState('');

  const [failMessage, setFailMessage] = useState(false);

  const [isInvalidEventStart, setIsInvalidEventStart] = useState(true);
  const [isInvalidEventEnd, setIsInvalidEventEnd] = useState(true);
  const [isInvalidTopic, setIsInvalidTopic] = useState(true);
  const [isInvalidDescription, setIsInvalidDescription] = useState(true);
  const [isInvalidZipCode, setIsInvalidZipCode] = useState(true);

  const [eventStartPrompt, setEventStartPrompt] = useState(false);
  const [eventEndPrompt, setEventEndPrompt] = useState(false);
  const [topicPrompt, setTopicPrompt] = useState(false);
  const [descriptionPrompt, setDescriptionPrompt] = useState(false);
  const [zipPrompt, setZipPrompt] = useState(false);

  const checkFormValidation = () => {
    if (eventStart === '') {
      setIsInvalidEventStart(true);
      setEventStartPrompt(true);
    }
    if (eventEnd === '') {
      setIsInvalidEventEnd(true);
      setEventEndPrompt(true);
    }
    if (topic === '') {
      setIsInvalidTopic(true);
      setTopicPrompt(true);
    }
    if (description === '') {
      setIsInvalidDescription(true);
      setDescriptionPrompt(true);
    }
    if (zipCode.length !== 5) {
      setIsInvalidZipCode(true);
      setZipPrompt(true);
    }
  };

  const [created, setCreated] = useState(false);

  const submitEvent = async (e) => {
    e.preventDefault();
    await checkFormValidation();
    if (
      !isInvalidEventStart &&
      !isInvalidEventEnd &&
      !isInvalidTopic &&
      !isInvalidDescription &&
      !isInvalidZipCode
    ) {
      const response = await dispatch(
        createEventAsync({ eventStart, eventEnd, topic, description, zipCode })
      );
      if (response.type === '/addEvent/rejected') {
        setCreated(false);
        setFailMessage(true);
      } else {
        setCreated(true);
        setFailMessage(false);
      }
    }
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none rounded-lg block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('img/events-bg.jpg')] h-[calc(100vh_-_5rem)]">
      {created ? (
        <div className="">
          <p>Event successfully created!</p>
          <Link to={`/events/`}>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">
              Back to Browse Events!
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-row">
          <div className="w-1/2"></div>
          <div className="w-1/2 pt-20 px-20 justify-center">
            <p
              className={
                failMessage
                  ? 'text-red-500 font-rubik text-center font-bold text-sm mt-6'
                  : 'collapse font-rubik text-xs'
              }
            >
              Cannot create event.
            </p>
            <h3 className="text-4xl font-rubikmono text-center pb-10">
              Create New Event
            </h3>
            <div className="flex flex-wrap">
              <form onSubmit={submitEvent}>
                <div className="flex flex-wrap mb-5">
                  <div className="w-1/2 flex flex-col pr-6">
                    <label htmlFor="event_start" className={labelClass}>
                      Start
                    </label>
                    <input
                      type="datetime-local"
                      id="event_start"
                      value={eventStart}
                      onChange={(e) => {
                        setIsInvalidEventStart(false);
                        setEventStartPrompt(false);
                        setEventStart(e.target.value);
                      }}
                      className={validClass}
                      // required
                    ></input>
                    <p
                      className={
                        eventStartPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a start date/time
                    </p>
                  </div>

                  <div className="w-1/2 flex flex-col">
                    <label htmlFor="event_end" className={labelClass}>
                      End
                    </label>
                    <input
                      type="datetime-local"
                      id="event_end"
                      value={eventEnd}
                      onChange={(e) => {
                        setIsInvalidEventEnd(false);
                        setEventEndPrompt(false);
                        setEventEnd(e.target.value);
                      }}
                      className={validClass}
                      // required
                    ></input>
                    <p
                      className={
                        eventEndPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a end date/time
                    </p>
                  </div>

                  <div className="w-1/2 flex flex-col pr-6">
                    <label htmlFor="topic" className={labelClass}>
                      Category
                    </label>
                    <input
                      type="text"
                      id="topic"
                      value={topic}
                      onChange={(e) => {
                        setIsInvalidTopic(false);
                        setTopicPrompt(false);
                        setTopic(e.target.value);
                      }}
                      className={validClass}
                      placeholder="Birthday, Group Playdate, etc..."
                      // required
                    ></input>
                    <p
                      className={
                        topicPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      This field must be filled
                    </p>
                  </div>
                  <div className="w-1/2 flex flex-col">
                    <label htmlFor="zip_code" className={labelClass}>
                      Zip Code
                    </label>
                    <input
                      type="number"
                      id="zip_code"
                      value={zipCode}
                      onChange={(e) => {
                        setIsInvalidZipCode(false);
                        setZipPrompt(false);
                        setZipCode(e.target.value);
                      }}
                      className={validClass}
                      placeholder="01010"
                      // required
                    ></input>
                    <p
                      className={
                        zipPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a valid zip code!
                    </p>
                  </div>

                  <div className="w-full">
                    <label htmlFor="description" className={labelClass}>
                      Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      value={description}
                      onChange={(e) => {
                        setIsInvalidDescription(false);
                        setDescriptionPrompt(false);
                        setDescription(e.target.value);
                      }}
                      className={validClass}
                      placeholder="Tell us a little bit more about this event"
                      // required
                    ></input>
                    <p
                      className={
                        descriptionPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a description of this event!
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      // required
                    ></input>
                  </div>
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    I agree with the{' '}
                    <a
                      href="/"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      terms and conditions
                    </a>
                    .
                  </label>
                </div>
                <button
                  type="submit"
                  className="ease-in font-rubikmono duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-8 mb-5"
                >
                  SUBMIT
                </button>
              </form>
              <div className="m-auto">
                <button
                  className="max-w-fit text-sm m-auto font-semibold hover:text-bold-purple ease-in-out duration-100"
                  onClick={goBack}
                >
                  BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
