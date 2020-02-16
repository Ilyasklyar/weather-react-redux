import React from 'react';
import './App.css';
import LocationContainer from './components/Location/LocationContainer'

const App = (props) => {

  return (
    <div className='bg-all'>
      <LocationContainer store={props.store} />
    </div>
  );
}

export default App;
