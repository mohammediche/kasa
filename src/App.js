import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import FicheLogement from "./pages/FicheLogement";
import Undefined from "./pages/Undefined";
import APropos from "./pages/APropos";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <>
         <Route path='/' element={<Home />}/>
         <Route path='/logement' element={< FicheLogement/>}/>
         <Route path='/propos' element={< APropos/>}/>
         <Route path='*' element={< Undefined/>}/>
  
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
