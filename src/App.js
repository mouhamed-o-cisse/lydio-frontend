import { Route, Routes, Navigate } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout'; 
import { useContext } from 'react';
import './App.css';

// Pages 
import HomePage from './pages/HomePage';
import ConfirmedOrders from './pages/ConfirmedOrders';
import UnreachableClients from './pages/UnreachableClients';
import NotFoundPage from './pages/NotFoundPage';
import NotTreatedOrders from './pages/NotTreatedOrders';
import Reservations from './pages/Reservations';
import OrderDetails from './pages/OrderDetails';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
    <Routes>
  {/* 
  {authCtx.isLoggedIn && ( <Route path='/' element={<Navigate replace to='/home' />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/new-user' element={<NewUser />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/home' element={<HomePage />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/text' element={<TextPage />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/quotes' element={<QuoteList />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/quote-detail/:quoteId' element={<QuoteDetail />} /> )}
  {authCtx.isLoggedIn && ( <Route path='/addquote' element={<AddQuotes />} /> )}
  {authCtx.isLoggedIn && ( <Route path='*' element={<NotFoundPage />} /> )}

  {!authCtx.isLoggedIn && ( <Route path='/login' element={<Login />} /> )}
  {!authCtx.isLoggedIn && ( <Route path='/' element={<Login />} /> )}
  {!authCtx.isLoggedIn && <Route path='*' element={<Navigate replace to='/login' />} />
   } */}
  <Route path='/' element={<Navigate replace to='/accueil' />} />
  <Route path='/accueil' element={<HomePage />} />
  <Route path='/not-found' element={<NotFoundPage />} />
  <Route path='/pas-traitees' element={<NotTreatedOrders />} />
  <Route path='/confirmees' element={<ConfirmedOrders />} />
  <Route path='/injoignables' element={<UnreachableClients />} />
  <Route path='/reservations' element={<Reservations />} />
  
  <Route path='/detail-cmd/:order_id' element={<OrderDetails />} />
      
    </Routes>
  </Layout>
  );
}

export default App;