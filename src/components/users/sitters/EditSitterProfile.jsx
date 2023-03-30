import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  updateSitter,
  updateSitterPrefs,
  resetSitterStatus,
  selectSitters,
} from '../../../slices/sittersSlice';

const EditSitterProfile = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const { sitter } = props;
  const { sitterPrefs } = props.sitter;

  const token = window.localStorage.getItem('token');

  const { singleSitter } = useSelector(selectSitters);

  const [saveSuccess, setSaveSuccess] = useState(false);

  const [formData, setFormData] = useState({});

  const [prefsData, setPrefsData] = useState({});

  useEffect(() => {
    if (sitter && sitter.id) {
      setFormData({
        rate: sitter.rate,
        bio: sitter.bio,
        canFoster: sitter.canFoster,
      });
    }

    if (sitterPrefs && sitterPrefs.length) {
      setPrefsData({
        hostAtHome: sitterPrefs[0].hostAtHome,
        atOwnerHouse: sitterPrefs[0].atOwnerHouse,
        reactive: sitterPrefs[0].reactive,
        puppies: sitterPrefs[0].puppies,
        small: sitterPrefs[0].small,
        medium: sitterPrefs[0].medium,
        large: sitterPrefs[0].large,
        extraLarge: sitterPrefs[0].extraLarge,
        multiplePets: sitterPrefs[0].multiplePets,
        cats: sitterPrefs[0].cats,
        disabled: sitterPrefs[0].disabled,
        medication: sitterPrefs[0].medication,
      });
    }
  }, [sitter, sitterPrefs]);

  const [formDisabled, setFormDisabled] = useState(false);

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const invalidClass =
    'appearance-none block w-full border border-red-500 bg-white-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const buttonClass =
    'ease-in duration-300 font-rubikmono hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-3';

  const disabledButtonClass =
    'font-rubikmono bg-bold-blue disabled:opacity-25 w-full text-white py-3 rounded-xl mx-auto block text-xl mt-3';

  const submitSitterUpdates = async (evt) => {
    evt.preventDefault();

    const id = sitter.id;
    const res = await dispatch(updateSitter({ id, token, formData }));
    console.log(res);
  };

  const submitSitterPrefsUpdate = async (evt) => {
    evt.preventDefault();

    const id = sitter.id;
    const res = await dispatch(updateSitterPrefs({ id, token, prefsData }));
    console.log(res);
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono">Edit Sitter Profile</h2>
      </div>
      <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
        {sitter && sitter.id ? (
          <div>
            <div>
              <section>
                <form onSubmit={submitSitterUpdates}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-full flex flex-col">
                      <label className={labelClass}>Bio</label>
                      <textarea
                        className={validClass}
                        value={formData.bio}
                        rows={3}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            bio: evt.target.value,
                          });
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/2 flex flex-col pr-6">
                      <label className={labelClass}>Rate</label>
                      <input
                        className={validClass}
                        type="number"
                        min={0}
                        max={100}
                        step={1}
                        value={formData.rate}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            rate: evt.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-1/2 flex flex-col">
                      <label className={labelClass}>Can Foster</label>
                      <select
                        className={validClass}
                        value={formData.canFoster}
                        onChange={(evt) => {
                          setFormData({
                            ...formData,
                            canFoster: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>not right now</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit">Save Edits</button>
                </form>
              </section>
            </div>
            <div>
              <p className="font-rubikmono my-5">Pet Preferences</p>
              <section>
                <form onSubmit={submitSitterPrefsUpdate}>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Host At Home</label>
                      <select
                        className={validClass}
                        value={prefsData.hostAtHome}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            hostAtHome: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Owner Home</label>
                      <select
                        className={validClass}
                        value={prefsData.atOwnerHouse}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            atOwnerHouse: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>

                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Puppies</label>
                      <select
                        className={validClass}
                        value={prefsData.puppies}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            puppies: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col">
                      <label className={labelClass}>Cats</label>
                      <select
                        className={validClass}
                        value={prefsData.cats}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            cats: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Small</label>
                      <select
                        className={validClass}
                        value={prefsData.small}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            small: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Medium</label>
                      <select
                        className={validClass}
                        value={prefsData.medium}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            medium: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Large</label>
                      <select
                        className={validClass}
                        value={prefsData.large}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            large: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col">
                      <label className={labelClass}>Extra Large</label>
                      <select
                        className={validClass}
                        value={prefsData.extraLarge}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            extraLarge: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-5">
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Reactive Pets</label>
                      <select
                        className={validClass}
                        value={prefsData.reactive}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            reactive: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Multiple Pets</label>
                      <select
                        className={validClass}
                        value={prefsData.multiplePets}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            multiplePets: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col pr-6">
                      <label className={labelClass}>Disabled Pets</label>
                      <select
                        className={validClass}
                        value={prefsData.disabled}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            disabled: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                    <div className="w-1/4 flex flex-col">
                      <label className={labelClass}>Medication</label>
                      <select
                        className={validClass}
                        value={prefsData.medication}
                        onChange={(evt) => {
                          setPrefsData({
                            ...prefsData,
                            medication: evt.target.value,
                          });
                        }}
                      >
                        <option value={true}>yes</option>
                        <option value={false}>no</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit">Save Preferences</button>
                </form>
              </section>
            </div>
          </div>
        ) : (
          'fetching good things!'
        )}
      </div>
    </div>
  );
};

export default EditSitterProfile;
