import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Header from './pages/header';
import Home from './pages/home';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MovieDetails'
function App() {
  return (
      <>
        <Router>
          <Header/>
            <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/Movies" exact component={Movies} />
            <Route path="/Movies/:id" exact component={MoviesDetails} />
            </Switch>
             
        </Router>
      </>
  );
}

export default App;
