import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import BlogScreen from './screens/BlogScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import EditorScreen from './screens/EditorScreen'

import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/blogs/:id" component={BlogScreen} />
      <Route exact path="/register" component={RegisterScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/admin/editor" component={EditorScreen} />
    </Router>
  );
}

export default App;
