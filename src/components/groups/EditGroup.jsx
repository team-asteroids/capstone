import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSingleGroup, editSingleGroup } from '../../slices/groupsSlice';
import BookingSuccess from '../ui/BookingSuccess';

const EditGroup = () => {
  const { groupId } = useParams();
  const { userAuth } = useSelector(selectAuth);
  const singleGroup = useSelector((state) => state.groups.singleGroup);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(singleGroup.name);
  const [description, setDescription] = useState(singleGroup.description);
  const [topic, setTopic] = useState(singleGroup.topic);
  const [imageSrc, setImage] = useState(singleGroup.imageSrc);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [edited, setEdited] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchSingleGroup(groupId));
    };
    fetchData();
  }, [dispatch]);

  const editGroup = async (e) => {
    e.preventDefault();
    const res = await dispatch(
      editSingleGroup({ groupId, name, topic, description, imageSrc })
    );
    if (res.type === '/editSingleGroup/fulfilled') {
      setEdited(true);
    }
    // console.log('singleGroup state in EDITGROUP-->', singleGroup);
    // navigate(`/groups/${groupId}`);
  };

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const disabledClass =
    'appearance-none block border-slate-400 w-full bg-slate-200/40 border rounded py-3 px-4 leading-tight mt-3 font-rubik';

  return (
    <div>
      <div>
        {!edited ? (
          <div className="flex flex-col">
            <form onSubmit={editGroup}>
              <p className="font-rubikmono pb-5">EDIT GROUP</p>
              <div className="flex flex-wrap mb-3">
                <div className="w-1/2 flex flex-col pr-6">
                  <label className={labelClass}>Name</label>
                  <input
                    id="name"
                    name="name"
                    className={validClass}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label className={labelClass}>Topic</label>
                  <select
                    className={validClass}
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
                </div>
              </div>
              <div className="w-full flex flex-col">
                <label className={labelClass}>Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className={validClass}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="w-full flex flex-col mt-3">
                <label className={labelClass}>Image</label>
                <input
                  id="imageSrc"
                  name="imageSrc"
                  className={validClass}
                  value={imageSrc}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="ease-in duration-300 font-rubikmono hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-6"
                >
                  SAVE EDITS
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <p className="text-center font-rubik font-semibold text-bright-white text-xl">
              SAVE SUCCESSFUL!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditGroup;
