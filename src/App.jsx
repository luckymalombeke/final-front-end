import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Customer from './pages/Customer';
import Employees from './pages/Employees';
import Orders from './pages/Orders';
import Service from './pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/customers" replace />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/services" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

