import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Ejemplo1 from './pages/Ejemplo1';

function App() {
  return (
    <div className="App">
      {/*<Header></Header>*/}
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
       <Route path='/' element ={<HomePage/>}></Route>*
       <Route path='/ejemplo1' element ={<Ejemplo1/>}></Route>*
       
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;
