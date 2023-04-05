import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  deleteSitterReview,
  editSitterReview,
  fetchSitterReview,
  selectUser,
} from '../../slices/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuth } from '../../slices/authSlice';

const EditSitterReview = (props) => {
  const { user, sitter } = props;
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector(selectAuth);
  const { singleReview } = useSelector(selectUser);

  const [context, setContext] = useState('');
  const [validReview, setValidReview] = useState(true);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // console.log('singleReview', singleReview);

  useEffect(() => {
    if (user && user.id) {
      const id = user.id;
      const reviewId = params.reviewId;
      dispatch(fetchSitterReview({ id, token, reviewId }));
    }
  }, [user]);

  useEffect(() => {
    if (singleReview && singleReview.id) {
      setContext(singleReview.context);
    }
  }, [singleReview]);

  const submitReviewEdit = async (evt) => {
    evt.preventDefault();
    const id = user.id;
    const reviewId = +params.reviewId;
    if (context !== '') {
      const res = await dispatch(
        editSitterReview({ id, token, reviewId, context })
      );

      if (res && res.type === 'editReview/fulfilled') {
        setValidReview(true);
        setSaveSuccess(true);
      } else {
        setSaveSuccess(false);
      }
    } else setValidReview(false);
  };

  const deleteReview = async () => {
    const id = user.id;
    const reviewId = +params.reviewId;
    const res = await dispatch(deleteSitterReview({ id, token, reviewId }));
    if (res && res.type === 'deleteReview/fulfilled') {
      setDeleteSuccess(true);
    }
  };

  useEffect(() => {
    if (saveSuccess || deleteSuccess) {
      setTimeout(() => goBack(), 1000);
    }
  }, [saveSuccess, deleteSuccess]);

  const goBack = () => {
    navigate(-1);
  };

  const labelClass = 'text-xs font-rubikmono';

  const buttonClass =
    'ease-in duration-300 hover:bg-bold-purple w-full bg-bold-blue text-white py-3 rounded-xl mx-auto block text-xl hover:transition-all mt-8 mb-5';

  const validClass =
    'appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  const invalidClass =
    'border border-red-500 appearance-none block w-full bg-white-200 border rounded py-3 px-6 leading-tight focus:outline-none focus:bg-white focus:border-bold-blue mt-1 font-rubik';

  return (
    <div className="font-rubik flex flex-col gap-2">
      <div>
        <button
          className="text-left max-w-fit text-xs pb-3 font-semibold hover:text-bold-purple ease-in-out duration-100"
          onClick={goBack}
        >
          BACK
        </button>
      </div>
      <h2 className="font-rubikmono">Edit Sitter Review</h2>
      <p
        className={
          !validReview
            ? 'text-red-500 font-rubik font-bold text-sm text-left'
            : 'collapse -mt-5'
        }
      >
        Review cannot be empty!
      </p>
      <p
        className={
          saveSuccess
            ? 'text-left font-rubik font-semibold text-bold-blue'
            : '-mt-5 collapse'
        }
      >
        Save Successful!
      </p>
      <p
        className={
          deleteSuccess
            ? 'text-left font-rubik font-semibold text-bold-orange'
            : '-mt-5 collapse'
        }
      >
        Review Successfully Deleted!
      </p>
      <div>
        <section className="w-2/3">
          <form onSubmit={submitReviewEdit}>
            <div className="flex flex-wrap mb-5">
              <div className="w-full flex flex-col">
                <label className={labelClass}>Review Details</label>
                <textarea
                  className={validReview ? validClass : invalidClass}
                  rows={6}
                  value={context}
                  onChange={(evt) => {
                    setValidReview(true);
                    setSaveSuccess(false);
                    setContext(evt.target.value);
                  }}
                />
              </div>
            </div>
            <button className={buttonClass} type="submit">
              SAVE
            </button>
          </form>
        </section>
        <div className="w-2/3 text-center font-semibold text-red-600 hover:text-red-900">
          <button onClick={deleteReview}>DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default EditSitterReview;
