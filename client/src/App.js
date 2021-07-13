import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
    </Router>
  );
}

export default App;
