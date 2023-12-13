import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './server';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import ErrorComponent from './components/ErrorComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='about'
            element={<About />}
          />
          <Route
            path='vans'
            element={<Vans />}
          />
          <Route
            path='vans/:id'
            element={<VanDetail />}
          />
          <Route
            path='*'
            element={<ErrorComponent />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
