import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import ProductDescription from './Pages/ProductDescription';
import Checkout from './Pages/Checkout';

function App() {

  const data = [
    { path: '/', element: <Home /> },
    { path: '/shop', element: <Shop /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/cart', element: <Cart /> },
    { path: '/product', element: <ProductDescription /> },
    { path: '/checkout', element: <Checkout /> },
  ]

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {data.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App
