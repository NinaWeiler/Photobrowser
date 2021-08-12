import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ImageGridView from './pages/ImageGridView';
import DetailsView from './pages/DetailsView'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ImageGridView} />
        <Route exact path='/image/:id' component={DetailsView} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
