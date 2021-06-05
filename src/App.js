import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './modules/home';
import Part from './modules/part';
import Test from './modules/test';


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 h-screen pt-1">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/parts/:id">
            <Part />
          </Route>
          <Route path="/tests/:partId?/:testId?">
            <Test />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;