import { getMoviesRewiews } from '../../utils/apiService';
import { useState, useEffect } from 'react';

export default function Reviews({id}) {
  const [moviesReviews, setMoviesReviews] = useState(null);

  useEffect(() => {
    getMoviesRewiews(id).then(res => {
      console.log('MovRes', res);
      setMoviesReviews(res);
    });
  }, [id]);
console.log('moviesReviews', moviesReviews);
  return (
  
 <ul>
        {moviesReviews && moviesReviews.data.results.map(({ content, index }) => (<li key={index}>{content}</li>))}
      </ul>
 
  )
};
