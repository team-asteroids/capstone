import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from '../../slices/authSlice';
import { addSingleGroup } from '../../slices/groupsSlice';

const CreateGroup = () => {
  const { userAuth } = useSelector(selectAuth);

  const dispatch = useDispatch();

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

  return (
    <>
      {created ? (
        <div className="p-6 bg-[#fca5a5]">
          <p>Group successfully created!</p>
          <Link to={`/groups/`}>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">
              Back to Browse Groups!
            </button>
          </Link>
        </div>
      ) : (
        <div className="p-6 bg-[#fca5a5]">
          <p
            className={
              failMessage
                ? 'text-red-500 font-rubik text-center font-bold text-sm mt-6'
                : 'collapse font-rubik text-xs'
            }
          >
            Cannot create group.
          </p>
          <h3 className=" text-bold-purple text-lg font-rubikmono ">
            Create New Group
          </h3>
          <div>
            <form onSubmit={submitGroup}>
              <div>
                <label>Name</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setIsInvalidName(false);
                    setNamePrompt(false);
                    setName(e.target.value);
                  }}
                />
                <p
                  className={
                    namePrompt ? 'text-xs mt-2 text-red-500' : 'collapse -mt-2'
                  }
                >
                  Please enter a name!
                </p>
              </div>
              <div>
                <label>
                  Topic
                  <select
                    name="topic"
                    id="topic"
                    value={topic}
                    onChange={(e) => {
                      setIsInvalidTopic(false);
                      setTopicPrompt(false);
                      setTopic(e.target.value);
                    }}
                  >
                    <option value="select">Select a Topic</option>
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
                </label>
              </div>
              <div>
                <label>Description</label>
                <input
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setIsInvalidDescription(false);
                    setDescriptionPrompt(false);
                    setDescription(e.target.value);
                  }}
                />{' '}
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
              <div>
                <label>Image</label>
                <input
                  id="imageSrc"
                  name="imageSrc"
                  value={imageSrc}
                  onChange={(e) => {
                    setImageSrc(e.target.value);
                  }}
                />
              </div>
              <div>
                <button type="submit">Create Group!</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateGroup;
