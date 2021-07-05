import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Posts/Posts'
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">

      <Navbar />

      <div style={{ "display": "flex", "gap": "2vw" }}>
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
