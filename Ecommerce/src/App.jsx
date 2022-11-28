import { Home } from './pages/Home';
import { Products } from './pages/Products';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';

function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
