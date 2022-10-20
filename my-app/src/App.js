
import { Routes, Route } from 'react-router-dom';
import Phones from './pages/Phones';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './App.css';
import Details from './components/Details';


function App() {

  const [phones, setPhones] = useState([])
  useEffect(() => {
      axios.get('http://localhost:5005/api/phones')
      
      .then((response)=>{
          console.log(response)
          setPhones(response.data)})        
      .catch((error) => console.log(error));
  },[])

  return (
    <div className="App">
      <h1>Hello</h1>
      <Phones phones={phones} />
      <Routes>
        <Route path={'/:id'} element={<Details />}/>
      </Routes>

    </div>
  );
}

export default App;
