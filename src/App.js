import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createUser' element={<CreateUser/>}/>
        <Route path='/editUser' element={<EditUser/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
