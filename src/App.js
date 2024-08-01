import { Routes, Route } from 'react-router-dom';
import './App.css';
import AdminLayout from './pages/AdminPages/AdminLayout';
import Dashboard from './pages/Dashboard';
import Suppliers from './pages/Suppliers';
import Products from './pages/Products';
import Storage from './pages/Warehouses/Storage';
import Distribution from './pages/Warehouses/Distribution';
import Store from './pages/Warehouses/Store';
import ManToSto from './pages/Transportation/ManToSto';
import StoToDis from './pages/Transportation/StoToDis';
import DisToSho from './pages/Transportation/DisToSho';
import ShoToHome from './pages/Transportation/ShoToHom';
import YardMan from './pages/YardMan';
import TrailerMan from './pages/TrailerMan';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<AdminLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path="/manu-ware" element={<Suppliers />} />
          <Route path="/products" element={<Products />} />
          <Route path="/stor-ware" element={<Storage />} />
          <Route path="/dist-ware" element={<Distribution />} />
          <Route path="/shop-ware" element={<Store />} />
          <Route path="/trans-manu-stor" element={<ManToSto />} />
          <Route path="/trans-stor-dist" element={<StoToDis />} />
          <Route path="/trans-dist-shop" element={<DisToSho />} />
          <Route path="/trans-shop-cust" element={<ShoToHome />} />
          <Route path="/yard-man" element={<YardMan />} />
          <Route path="/trail-man" element={<TrailerMan />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
