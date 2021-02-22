import Error from './Pages/error';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Landing from './Pages/landing';
import Aboutus from './Pages/aboutus';
import HomePage from './Pages/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-sign-up.component';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE </h1>
//   </div>
// );

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/homepage" exact component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
        <Route exact component={Error} />
      </Switch>
    </Router>



  );
}

export default App;
