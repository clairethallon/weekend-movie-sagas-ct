import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import AddMovie from '../AddMovie/AddMovie'


function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details" exact>
          <MovieDetails />
        </Route>
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>


        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
