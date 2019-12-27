import React from 'react';

//import ename from './login/xyz'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar/CustomNavbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';


//So this would be a username instead
import Home from './Components/Navbar/Home';
import About from './Components/Navbar/About';

class Profile extends React.Component {
constructor(props){
  super(props);
}


render(){
  return(
    <div>
        <Router className="App">
       <div>
        <Navbar />
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
       </div> 
    </Router> 
    </div>
  );
}


}

export default Profile;
