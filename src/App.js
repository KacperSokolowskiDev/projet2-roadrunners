import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Homepage from './component/Homepage';
import Roadpage from  './component/Roadpage';
import Toolbar from "./component/Toolbar";


function App() {

  {/*function TestRouter () {
    return(
        <p>This is a test</p>
    )
}*/}

  return (
    <div className="App">
            <div> 
    
              <Navbar /> 
                <Switch>
                    <Route exact path='/'>
                      <Homepage />  
                    </Route>
                    <Route path='/application'>
                        <Roadpage />
                    </Route>
                </Switch>
                <Toolbar/>
            </div>
    </div>
  );
}

export default App;
