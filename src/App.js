import logo from './logo.svg';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';
import { useState } from 'react';

const sampleSimpson = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};


function App() {
  const [simpson, setSimpson] = useState(" ");
  const getSimpson = () => {
    
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      
      .then((response) => response.data)
      
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className='App'>
      <DisplaySimpson simpson={simpson} />
      <button type="button" onClick={getSimpson}>Get Simpson</button>
    </div>
  );
}

export default App;

