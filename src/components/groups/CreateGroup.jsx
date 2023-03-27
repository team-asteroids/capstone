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

  const [isInvalid, setIsInvalid] = useState(false);
  const [createFail, setCreateFail] = useState(false);

  const [isInvalidName, setIsInvalidName] = useState(false);
  const [isInvalidTopic, setIsInvalidTopic] = useState(false);
  const [isInvalidDescription, setIsInvalidDescription] = useState(false);

  const checkFormValidation = () => {
    if (name === '') {
      setIsInvalidName(true);
      setIsInvalid(true);
    }
    if (topic === '') {
      setIsInvalidTopic(true);
      setIsInvalid(true);
    }
    if (description === '') {
      setIsInvalidDescription(true);
      setIsInvalid(true);
    }
    if (!isInvalidName && !isInvalidTopic && !isInvalidDescription)
      setIsInvalid(false);
  };

  const [created, setCreated] = useState(false);

  const submitGroup = async (e) => {
    e.preventDefault();
    await checkFormValidation();
    if (isInvalid) {
      setCreateFail(true);
      setCreated(false);
    } else {
      await dispatch(addSingleGroup({ name, topic, description, imageSrc }));
      setCreated(true);
    }
  };

  return (
    <>
      {/* {created ? (
        <div className="p-6 bg-[#fca5a5]">
          <p>Group successfully created!</p>
          <Link to={`/groups/`}>
            <button className="p-1 rounded-lg bg-[#cbd5e1]">
              Back to Browse Groups!
            </button>
          </Link>
        </div>
      ) : ( */}
      <div className="p-6 bg-[#fca5a5]">
        <p
          className={
            createFail && isInvalid
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
                  setName(e.target.value);
                }}
              />
              <p
                className={
                  isInvalidName ? 'text-xs mt-2 text-red-500' : 'collapse -mt-2'
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
                    isInvalidTopic
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
                  setDescription(e.target.value);
                }}
              />{' '}
              <p
                className={
                  isInvalidDescription
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
      {/* )} */}
    </>
  );
};

export default CreateGroup;
