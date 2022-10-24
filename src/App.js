import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/checkout' element={<Checkout />}/>
         <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
