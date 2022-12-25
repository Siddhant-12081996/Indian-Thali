
import './App.css';
import Header from './componant/Header';
//import Cards from './componant/Cards';
//import CardsDetail from './componant/CardsDetail';
import Cards from './componant/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './componant/Footer'
//import { Card } from '@mui/material';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Checkout from './pages/Checkout';

 function App() {
  return (
    <div>
    
     <Header/>
     <Cards/>
     <Footer/>




     {/* <Routes>
       <Route path='/' element={<Cards/>}/>
       <Route path='/cart/:id' element={<CardsDetail/>}/>
       <Route path='/checkout/:id' element={<Checkout/>}/>
     </Routes> */}
   

   
    </div>
  );
}

export default App;
