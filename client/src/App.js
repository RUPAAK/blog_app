import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/blog" component={BlogScreen} />
    </Router>
  );
}

export default App;
