import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { addSingleGroup } from '../../slices/groupsSlice';

const CreateGroup = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const [failMessage, setFailMessage] = useState(false);

  const [isInvalidName, setIsInvalidName] = useState(true);
  const [isInvalidTopic, setIsInvalidTopic] = useState(true);
  const [isInvalidDescription, setIsInvalidDescription] = useState(true);

  const [namePrompt, setNamePrompt] = useState(false);
  const [topicPrompt, setTopicPrompt] = useState(false);
  const [descriptionPrompt, setDescriptionPrompt] = useState(false);

  const checkFormValidation = () => {
    if (name === '') {
      setIsInvalidName(true);
      setNamePrompt(true);
    }
    if (topic === '') {
      setIsInvalidTopic(true);
      setTopicPrompt(true);
    }
    if (description === '') {
      setIsInvalidDescription(true);
      setDescriptionPrompt(true);
    }
  };

  const [created, setCreated] = useState(false);

  const submitGroup = async (e) => {
    e.preventDefault();
    await checkFormValidation();
    if (!isInvalidName && !isInvalidDescription && !isInvalidTopic) {
      const response = await dispatch(
        addSingleGroup({ name, topic, description, imageSrc })
      );
      if (response.type === 'createGroup/rejected') {
        setCreated(false);
        setFailMessage(true);
      } else {
        setCreated(true);
        setFailMessage(false);
      }
    } else {
      setCreated(false);
      setFailMessage(true);
    }
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none rounded block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-cover bg-no-repeat bg-top bg-[url('img/groups-bg.jpg')] h-[calc(100vh_-_5rem)]">
      {created ? (
        <div className="">
          <p>Group successfully created!</p>
          <Link to={`/groups/`}>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">
              Back to Browse Groups!
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
              Cannot create group!
            </p>
            <h3 className=" text-bright-white text-center text-4xl font-rubikmono pb-10">
              Create New Group
            </h3>
            <div className="flex flex-wrap">
              <form onSubmit={submitGroup}>
                <div className="flex flex-wrap mb-5">
                  <div className="w-1/2 flex flex-col pr-6">
                    <label className={labelClass}>Name</label>
                    <input
                      id="name"
                      name="name"
                      className={validClass}
                      value={name}
                      onChange={(e) => {
                        setIsInvalidName(false);
                        setNamePrompt(false);
                        setName(e.target.value);
                      }}
                    />
                    <p
                      className={
                        namePrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a name!
                    </p>
                  </div>

                  <div className="w-1/2 flex flex-col">
                    <label className={labelClass}>Topic</label>
                    <select
                      name="topic"
                      id="topic"
                      className={validClass}
                      value={topic}
                      onChange={(e) => {
                        setIsInvalidTopic(false);
                        setTopicPrompt(false);
                        setTopic(e.target.value);
                      }}
                    >
                      <option disabled></option>
                      <option value="playdates">Playdates</option>
                      <option value="exotic pets">Exotic Pets</option>
                      <option value="neighborhood">Neighborhood</option>
                      <option value="recommendations">Recommendations</option>
                    </select>
                    <p
                      className={
                        topicPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please choose a topic!
                    </p>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className={labelClass}>Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      className={validClass}
                      value={description}
                      onChange={(e) => {
                        setIsInvalidDescription(false);
                        setDescriptionPrompt(false);
                        setDescription(e.target.value);
                      }}
                    />
                    <p
                      className={
                        descriptionPrompt
                          ? 'text-xs mt-2 text-red-500'
                          : 'collapse -mt-2'
                      }
                    >
                      Please enter a description!
                    </p>
                  </div>
                  <div className="w-full flex flex-col">
                    <label className={labelClass}>Image</label>
                    <input
                      id="imageSrc"
                      name="imageSrc"
                      className={validClass}
                      value={imageSrc}
                      onChange={(e) => {
                        setImageSrc(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="ease-in font-rubikmono duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-8 mb-5"
                  >
                    Create Group
                  </button>
                </div>
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

export default CreateGroup;
