import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar';
import Phones from './components/Phones/Phones';


function App() {
 
  
  return (
   <BrowserRouter>
    
        <Navbar />
        <Phones />
       <Footer/> 
    </BrowserRouter>
  );
}

export default App;
