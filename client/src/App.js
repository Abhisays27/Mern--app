
import './App.css';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './pages/home.jsx';
import Auth from './pages/auth.jsx';

import CreateRecipe from "./pages/create-recipe.jsx";


import SR from './pages/savedRecipe.jsx';
import Navbar from './components/navbar.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/create-recipe" element={<CreateRecipe />} />
          <Route path="/savedRecipe" element={<SR/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
export default App;

