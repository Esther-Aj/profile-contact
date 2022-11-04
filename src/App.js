
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Profile} from './Components/Profile';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
  
    <div className="App">

<Routes>
<Route exact path='/' element={<Profile />}/>
  <Route exact path='contact' element={<Contact />}/>
  <Route path='footer' element={<Footer />}/>
  </Routes>

  <Footer/>
    </div>
  
  );
}

export default App;
