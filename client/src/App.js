import Payment from './pages/Payment';
import Zoom from './pages/zoom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {About, Footer, Header,Work } from './container';
import { Navbar } from './components';
import './App.scss';
function App() {


  return (
    <>
      <div className="app">
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route exact path='/payment' element={<Payment />} />
          {/* <Route exact path='/zoom' element={<Zoom />} /> */}
          <Route exact path='/' element={<Header />} />
          <Route path='/about' element={<About/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/contact' element={<Footer/>}></Route>
        </Routes>
        </BrowserRouter>
        <About/>
        <Work/>
        <Footer/>
        
      </div>
      
      

    </>
    
  );
}

export default App;
