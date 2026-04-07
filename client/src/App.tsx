import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Listings from './pages/Listings'
import Profile from './pages/Profile'
import Login from './pages/Login'
import ListingsView from './pages/ListingsView'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/listings' element={<Listings />} />
        <Route path='/listings/:id' element={<ListingsView />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App