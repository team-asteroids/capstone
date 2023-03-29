import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { editSingleGroup } from '../../slices/groupsSlice';

const EditGroup = () => {
  const { groupId } = useParams();
  const { userAuth } = useSelector(selectAuth);
  const group = useSelector((state) => state.groups.singleGroup);
  const singleGroup = group.singleGroup;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(singleGroup.name);
  const [description, setDescription] = useState(singleGroup.description);
  const [topic, setTopic] = useState(singleGroup.topic);
  const [imageSrc, setImage] = useState(singleGroup.imageSrc);

  const [edited, setEdited] = useState(false);

  const editGroup = async (e) => {
    e.preventDefault();
    await dispatch(
      editSingleGroup({ groupId, name, topic, description, imageSrc })
    );
    setEdited(true);
    // console.log('singleGroup state in EDITGROUP-->', singleGroup);
    navigate(`/groups/${groupId}`);
  };

  return (
    <>
      <div>
        {!edited ? (
          <div>
            <form onSubmit={editGroup}>
              <div>
                <label>Name</label>
                <input
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div>
                <label>
                  Topic
                  <select
                    value={topic}
                    onChange={(e) => {
                      setTopic(e.target.value);
                    }}
                  >
                    <option value="playdates">Playdates</option>
                    <option value="exotic pets">Exotic Pets</option>
                    <option value="neighborhood">Neighborhood</option>
                    <option value="recommendations">Recommendations</option>
                  </select>
                </label>
              </div>
              <div>
                <label>Image</label>
                <input
                  id="imageSrc"
                  name="imageSrc"
                  value={imageSrc}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div>
                <button type="submit">Submit Post!</button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <p>{`Success! ${singleGroup.name} has been edited.`}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default EditGroup;
