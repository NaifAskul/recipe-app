import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (

    <BrowserRouter>

      <div className="container">

        <header> <Header /> </header>

        <main>
        
        <Routes>

        <Route path='/' element={<Home/>}/>

        <Route path='/recipe/:id' element={<RecipeDetails/>}/>

        <Route path='/AboutUs' element={<About/>}/>

        </Routes>
        
        </main>

        <footer><Footer/></footer>


      </div>

    </BrowserRouter>

  );
}

export default App;
