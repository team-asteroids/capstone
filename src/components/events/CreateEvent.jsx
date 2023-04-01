import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { createEventAsync } from '../../slices/eventsSlice';

const CreateEvent = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

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

  return (
    <div className="p-6 bg-pale-blue h-[calc(100vh_-_5rem)]">
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
        <div className="w-100 h-vh100 bg-pale-blue">
          <p
            className={
              failMessage
                ? 'text-red-500 font-rubik text-center font-bold text-sm mt-6'
                : 'collapse font-rubik text-xs'
            }
          >
            Cannot create event.
          </p>
          <h3 className=" text-bold-blue text-lg font-rubikmono ">
            Create New Event
          </h3>
          <div className="flex flex-wrap">
            <form onSubmit={submitEvent}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label htmlFor="event_start" className={labelClass}>
                    Event Start:
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
                <div>
                  <label
                    htmlFor="event_end"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Event End:
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

                <div>
                  <label
                    htmlFor="topic"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Type of Event:
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    This feild must be filled
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="zip_code"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location (Zip Code) :
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="01010"
                    // required
                  ></input>
                  <p
                    className={
                      zipPrompt ? 'text-xs mt-2 text-red-500' : 'collapse -mt-2'
                    }
                  >
                    Please enter a valid zip code!
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Event Details:
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEvent;
