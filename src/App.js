
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Component/HomePage/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
