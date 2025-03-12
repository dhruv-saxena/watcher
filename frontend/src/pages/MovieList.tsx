import { FC } from 'react';
import { Link } from 'react-router-dom';

const MovieList: FC = () => {
  // Placeholder data for now
  const movies = [
    { id: 1, title: 'Example Movie 1' },
    { id: 2, title: 'Example Movie 2' },
    { id: 3, title: 'Example Movie 3' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Movie Recommendations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map(movie => (
          <Link 
            key={movie.id}
            to={`/movies/${movie.id}`}
            className="p-4 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{movie.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList; 