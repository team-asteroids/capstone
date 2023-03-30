import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSitter,
  updateSitterPrefs,
  resetSitterStatus,
  selectSitters,
} from '../../../slices/sittersSlice';

const EditSitterProfile = (props) => {
  const dispatch = useDispatch();

  const { sitter } = props;
  const { sitterPrefs } = props.sitter;

  const token = window.localStorage.getItem('token');

  const { singleSitter } = useSelector(selectSitters);

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [savePrefsSuccess, setSavePrefsSuccess] = useState(false);

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
    return () => {
      dispatch(resetSitterStatus());
    };
  }, [sitter, sitterPrefs]);

  const labelClass = 'text-xs font-rubikmono';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-3 font-rubik';

  const buttonClass =
    'text-sm font-semibold ease-in-out duration-100 hover:text-bold-orange pb-2';

  const submitSitterUpdates = async (evt) => {
    evt.preventDefault();

    const id = sitter.id;
    const res = await dispatch(updateSitter({ id, token, formData }));

    if (res.type === 'updateSitter/fulfilled') {
      setSaveSuccess(true);
    } else setSaveSuccess(false);
  };

  const submitSitterPrefsUpdate = async (evt) => {
    evt.preventDefault();

    const id = sitter.id;
    const res = await dispatch(updateSitterPrefs({ id, token, prefsData }));

    if (res.type === 'updateSitterPrefs/fulfilled') {
      setSavePrefsSuccess(true);
    } else setSavePrefsSuccess(false);
  };

  return (
    <div className="font-rubik flex flex-col gap-5">
      <div>
        <h2 className="font-rubikmono mb-2">Edit Sitter Profile</h2>
        <div className="h-[calc(100vh_-_20rem)] overflow-auto flex flex-col gap-5">
          {sitter && sitter.id ? (
            <div>
              <div>
                <section>
                  <p
                    className={
                      saveSuccess
                        ? 'text-center font-rubik font-semibold text-bold-purple text-xs'
                        : 'font-rubik text-xs collapse'
                    }
                  >
                    SAVE SUCCESSFUL!
                  </p>
                  <form onSubmit={submitSitterUpdates}>
                    <div className="flex flex-wrap mb-5">
                      <div className="w-full flex flex-col">
                        <label className={labelClass}>Bio</label>
                        <textarea
                          className={validClass}
                          value={formData.bio}
                          rows={3}
                          onChange={(evt) => {
                            setSaveSuccess(false);
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
                            setSaveSuccess(false);
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
                            setSaveSuccess(false);
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
                    <button type="submit" className={buttonClass}>
                      SAVE EDITS
                    </button>
                  </form>
                </section>
              </div>
              <div>
                <p className="font-rubikmono mt-5 mb-2">Pet Preferences</p>
                <p
                  className={
                    savePrefsSuccess
                      ? 'text-center font-rubik font-semibold text-bold-purple text-xs'
                      : 'font-rubik text-xs collapse'
                  }
                >
                  SAVE SUCCESSFUL!
                </p>
                <section>
                  <form onSubmit={submitSitterPrefsUpdate}>
                    <div className="flex flex-wrap mb-5">
                      <div className="w-1/4 flex flex-col pr-6">
                        <label className={labelClass}>Host At Home</label>
                        <select
                          className={validClass}
                          value={prefsData.hostAtHome}
                          onChange={(evt) => {
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                            setSavePrefsSuccess(false);
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
                    <button className={buttonClass} type="submit">
                      SAVE PREFERENCES
                    </button>
                  </form>
                </section>
              </div>
            </div>
          ) : (
            'fetching good things!'
          )}
        </div>
      </div>
    </div>
  );
};

export default EditSitterProfile;
