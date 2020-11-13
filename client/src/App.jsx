import { Router, Link } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
