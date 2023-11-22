import { Routes , Route} from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
function App() {
  return (
    <div className="App font-poppins">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
