import {HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovieForm from '../AddMovieForm/AddMovieForm';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <Router>  
      <Typography variant="h2">THE MOVIES SAGA</Typography>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details/:id" exact>
          <MovieDetails />
        </Route>
        <Route path="/addmovie" exact>
          <AddMovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
