import './App.css'
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Estate from './pages/Estate';
import EstateId from './pages/EstateId';
import Error from './pages/Error';

export default function App() {

    return (
        <div className="App bg-[#131110] h-screen">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/estate" element={<Estate/>}/>
            <Route path="/estate/:id" element={<EstateId/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
  );
}
