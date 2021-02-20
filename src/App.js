import Error from './Pages/error';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './Pages/landing';
import Aboutus from './Pages/aboutus';
import HomePage from './Pages/homepage.component';
import ShopPage from './Pages/shop/shop.component.jsx';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact component={Error} />
      </Switch>
    </Router>



  );
}

export default App;
