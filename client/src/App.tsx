import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Listings from './pages/Listings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ListingsView from './pages/ListingsView';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Dashboard from './pages/admin/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register';
import AdminLayout from './layout/AdminLayout';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>

        {/* Public routes */}
        <Route element={
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/listings/:id" element={<ListingsView />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
            <Footer />
          </div>
        }>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingsView />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin routes */}
        <Route path="/dashboard/*" element={
          <ProtectedRoute>
            <AdminLayout>
              <Routes>
                <Route index element={<Dashboard />} />
              </Routes>
            </AdminLayout>
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;