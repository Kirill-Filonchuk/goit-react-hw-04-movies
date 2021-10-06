import { getMoviesCredits } from '../../utils/apiService';
import { useState, useEffect } from 'react';

export default function Cast({ id }) {
    const [moviesCast, setMoviesCast] = useState(null);

    useEffect(() => {
        getMoviesCredits(id).then(res => {
            console.log("movCast", res);
            setMoviesCast(res);
        });
    }, [id]);
    console.log('moviesCast', moviesCast);
    return (
        <p>Hello</p>
    //     <ul>
    //         {moviesCast && moviesCast.data.cast.map(({ character, name, profile_path }, index) => (<li key={index}>
    //             <img style={{ width: '100px', display: 'block'}}
    //                 src={
    //                     profile_path
    //                         ? `https://image.tmdb.org/t/p/w300${profile_path}`
    //                 :'https://media.comicbook.com/files/img/default-person.png'
    //                     }
    //         alt={name}
    //       />
    //             <li>{name}</li>
    //             <p >Character: {character}</p>
          
    //         </li>))}
    //   </ul>
    )
}
