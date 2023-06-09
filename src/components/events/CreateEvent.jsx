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
    if (zipCode === '') {
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
      if (response.type === 'addEvent/rejected') {
        setCreated(false);
        setFailMessage(true);
      } else {
        setCreated(true);
        setFailMessage(false);
      }
    }
  };

  return (
    <>
      {created ? (
        <div className="p-6 bg-pale-blue">
          <p>Event successfully created!</p>
          <Link to={`/events/`}>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">
              Back to Browse Events!
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-100 h-vh100 bg-pale-blue">
          <form onSubmit={submitEvent}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="event_start"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                ></input>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                ></input>
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
                  required
                ></input>
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
                  required
                ></input>
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
                required
              ></input>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
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
      )}
    </>
  );
};

export default CreateEvent;
