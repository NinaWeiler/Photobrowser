import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ImageGridView from './pages/ImageGridView';
import DetailsView from './pages/DetailsView'
import GalleryView from './pages/GalleryView';
import NavBar from './components/NavBar';
import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <div >
      <BrowserRouter>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path='/' component={GalleryView} />
        <Route exact path='/image/:id' component={DetailsView} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
