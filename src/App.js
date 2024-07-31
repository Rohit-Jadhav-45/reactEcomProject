import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' element={<h1>This is Home page</h1>}/>
          <Route path='/add' element={<h1>This is add Product page</h1>}/>
          <Route path='/update' element={<h1>This is update Product page</h1>}/>
          <Route path='/logout' element={<h1>This is logout page</h1>}/>
          <Route path='/profile' element={<h1>This is profile page</h1>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
         </Routes>
     </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
