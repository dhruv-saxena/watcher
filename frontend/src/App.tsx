import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';
import './App.css';

function App() {
  // TODO: Add proper auth check
  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/movies" /> : <Navigate to="/login" />} 
        />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/movies" 
          element={isAuthenticated ? <MovieList /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/movies/:id" 
          element={isAuthenticated ? <MovieDetail /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
