import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import User from './components/users/User';

class App extends React.Component {

  render() {
  return (

    <div>
      <Navbar />
       <div className='container'>
       <User />
      </div>
    </div>
  
   
  );
}
}

export default App;
