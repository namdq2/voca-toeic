import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './modules/home';
import Practicing from './modules/practicing';


function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 h-screen pt-1">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/practicing">
            <Practicing />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;