import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Posts/Posts'
import './App.css';
import { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  const [Users, setUser] = useState(null)
  return (
    <div className="App">

      <Navbar />

      <div style={{ "display": "flex", "gap": "2vw" }}>
        <Posts User={Users} />
        <Sidebar User={Users} setUser={setUser} />
      </div>
    </div>
  );
}

export default App;
