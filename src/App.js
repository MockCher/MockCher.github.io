import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Landing from './Landing'
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
    
    <Navbar />
    <Route exact path ="/" component={Landing} />
    {/* <Footer /> */}
    </Fragment>
    </Router>
  );
}

export default App;
