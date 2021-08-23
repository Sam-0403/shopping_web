import './App.css';
// import { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Screens
import HomeScreen from"./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import NavBar from './components/NavBar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

//hooks
import useToggleState from './hooks/useToggleState';

function App() {
  const [sideToggle, setSideToggle] = useToggleState(false);
  return (
    <Router>
      <NavBar click={setSideToggle} />
      <SideDrawer show={sideToggle}  click={setSideToggle}/>
      <BackDrop show={sideToggle}  click={setSideToggle}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
    
  );
}

export default App;
