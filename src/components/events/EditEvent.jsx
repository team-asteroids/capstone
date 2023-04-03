import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  selectSingleEvent,
  fetchSingleEvent,
  editEventAsync,
} from '../../slices/eventsSlice';
import { format } from 'date-fns';

const EditEvent = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector(selectSingleEvent);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, [dispatch, id]);

  const [formData, setFormData] = useState({
    eventStart: event.event_start,
    eventEnd: event.event_end,
    topic: event.topic,
    description: event.description,
    zipCode: event.zip_code,
  });

  console.log(event);
  const handleEdit = async (e) => {
    e.preventDefault();
    await dispatch(editEventAsync({ id, formData }));
    navigate(-1);
  };

  useEffect(() => {
    if (event & event.id) {
      setFormData({
        eventStart: event.event_start,
        eventEnd: event.event_end,
        topic: event.topic,
        description: event.description,
        zipCode: event.zip_code,
      });
    }
  }, [event]);

  const labelClass = 'text-xs font-rubikmono ';

  const validClass =
    'appearance-none rounded block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-left bg-[url('img/events-bg.jpg')] h-[calc(100vh_-_5rem)]">
      <div className="flex flex-row">
        <div className="w-1/2"></div>
        <div className="w-1/2 pt-20 px-20 justify-center">
          <h3 className="text-4xl font-rubikmono text-center pb-10">
            Edit Event
          </h3>
          <div className="flex flex-wrap">
            <form onSubmit={handleEdit}>
              <div className="flex flex-wrap mb-5">
                <div className="w-1/2 flex flex-col pb-3 pr-6">
                  <label htmlFor="event_start" className={labelClass}>
                    Start
                  </label>
                  <input
                    type="datetime-local"
                    id="event_start"
                    value={formData.eventStart}
                    onChange={(evt) => {
                      setFormData({
                        ...formData,
                        eventStart: evt.target.value,
                      });
                    }}
                    className={validClass}
                    // required
                  />
                </div>

                <div className="w-1/2 flex flex-col">
                  <label htmlFor="event_end" className={labelClass}>
                    END
                  </label>
                  <input
                    type="datetime-local"
                    id="event_end"
                    value={formData.eventEnd}
                    className={validClass}
                    onChange={(evt) => {
                      setFormData({
                        ...formData,
                        eventEnd: evt.target.value,
                      });
                    }}

                    // required
                  />
                </div>

                <div className="w-1/2 flex flex-col pb-3 pr-6">
                  <label htmlFor="topic" className={labelClass}>
                    Category
                  </label>
                  <input
                    type="text"
                    id="topic"
                    value={formData.topic}
                    onChange={(evt) => {
                      setFormData({
                        ...formData,
                        topic: evt.target.value,
                      });
                    }}
                    className={validClass}
                    // required
                  />
                </div>

                <div className="w-1/2 flex pb-3 flex-col">
                  <label htmlFor="zip_code" className={labelClass}>
                    Zip Code
                  </label>
                  <input
                    type="number"
                    id="zip_code"
                    value={formData.zipCode}
                    onChange={(evt) => {
                      setFormData({
                        ...formData,
                        zipCode: evt.target.value,
                      });
                    }}
                    className={validClass}
                    // required
                  />
                </div>

                <div className="w-full ">
                  <label htmlFor="description" className={labelClass}>
                    Event Details:
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    rows={6}
                    value={formData.description}
                    onChange={(evt) => {
                      setFormData({
                        ...formData,
                        description: evt.target.value,
                      });
                    }}
                    className={validClass}
                    //   required
                  />
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    // value=""
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
    </div>
  );
};

export default EditEvent;
