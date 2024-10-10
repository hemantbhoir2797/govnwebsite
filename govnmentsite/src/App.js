import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Impact from './components/Impact';

function App() {
  return (

    <div>
      <Routes>
        {/* User Routes */}
        <Route exact path="/" element={
          <>
          <Header/>
          <Home />
          <Impact />
          <Footer/>

          </>
        } 
        /> 





        {/* <Route exact path="/home" element={<Home />} /> 
        <Route exact path="/impact" element={<Impact />} /> 
        <Route exact path="/footer" element={<Footer/>} />  */}


        
        </Routes>
    </div>

    // <div className="App">
    //         <Header/>
    //         <Home />
    //         <Impact />
    //         <Footer/>
    //     </div>
  );
}

export default App;
