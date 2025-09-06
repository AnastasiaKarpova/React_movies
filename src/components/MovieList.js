import Movie from './Movie.js';
import './MovieList.css';

function MovieList(props)
{
    const {movies = []} = props;

    return(
        <div className='movies'>
        {
            movies.map
            (
                movie =>
                {
                    return <Movie key={movie.imdnID} {...movie} />
                }
            )
        }
        </div>
    )
}
export default MovieList;