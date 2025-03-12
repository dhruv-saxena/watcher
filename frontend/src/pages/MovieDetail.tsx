import { FC } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail: FC = () => {
  const { id } = useParams<{ id: string }>();

  // Placeholder data for now
  const movie = {
    id,
    title: `Movie ${id}`,
    description: 'This is a placeholder description for the movie.',
    recommendedBy: 'John Doe',
    reason: 'This movie is amazing because...',
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/movies" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Back to Movies
      </Link>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <p className="text-gray-600 mb-4">{movie.description}</p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Recommended by {movie.recommendedBy}</h2>
          <p>{movie.reason}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail; 