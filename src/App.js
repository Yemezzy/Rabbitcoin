  import './App.css';
import Home from './Pages/Home';
import Privatepool from './Pages/Privatepool';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <div className="App">
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/PrivatePool' element={<Privatepool/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
