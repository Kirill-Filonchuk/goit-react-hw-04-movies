import { getMoviesRewiews } from '../../utils/apiService';
import { useState, useEffect } from 'react';
import Status from '../../utils/status';
import s from './Reviews.module.css'

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// }

export default function Reviews({id}) {
  const [moviesReviews, setMoviesReviews] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  
  
  useEffect(() => {
    getMoviesRewiews(id)
      .then(res => {
      if (res.data.results.length === 0) {
        throw new Error("No Information");
     }
      setMoviesReviews(res);
      setStatus(Status.RESOLVED);
    }).catch(error => {
      setError(error);
      // console.log('error', error);
      setStatus(Status.REJECTED);
    });
  }, [id]);
// console.log('moviesReviews', moviesReviews);
  return (
    <>
      {
        status === Status.RESOLVED && (
<ul key={11} className={s.addInform}>
            {moviesReviews && moviesReviews.data.results.map(({ content, author }, index) => (<li key={index} className={s.itemInform}><h3>{author}</h3>{content}</li>))}
      </ul>
        )
      }
      {status === Status.REJECTED && <h2>{ error.message}</h2>}
 </>
  )
};
