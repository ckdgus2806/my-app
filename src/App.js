import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';

import Home_screen from './Home_screen';
import Info_screen from './Info_screen';
import Map_screen from './Map_screen';



function App() {
  return (
    <div className="App">
      <p>HI~</p>
      <Button variant="text"  >Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

      
    <div>
    <Routes>
      <Route path="/" element={<Home_screen />} />
      <Route path="/Info_screen" element={<Info_screen />} />  
      <Route path="/Map_screen" element={<Map_screen />} />  
    </Routes>
    </div>
      
      
    </div>
  );
}

export default App;