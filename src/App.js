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
import Exchange from './pages/Exchange';
import ExchangeDetail from './pages/ExchangeDetail'; 
import InDeliveryOrders from './pages/InDeliveryOrders';
import DeliveredOrders from './pages/DeliveredOrder';
import Login from './pages/Login';
import CancelledOrders from './pages/CancelledOrders';
import ReturnedOrders from './pages/ReturnedOrders';
import DeliveryGuysPage from './pages/DeliveryGuysPage';
import DeliveryGuysDetailPage from './pages/DeliveryGuysDetailPage';
import AllOrdersPage from './pages/AllOrdersPage';

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
  {authCtx.isLoggedIn && ( <Route path='/' element={<Navigate replace to='/accueil' />} />)}
  {authCtx.isLoggedIn && ( <Route path='/accueil' element={<HomePage />} />)}
  {authCtx.isLoggedIn && ( <Route path='/not-found' element={<NotFoundPage />} />)}
  {authCtx.isLoggedIn && ( <Route path='/echange' element={<Exchange />} />)}
  {authCtx.isLoggedIn && ( <Route path='/pas-traitees' element={<NotTreatedOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/confirmees' element={<ConfirmedOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/injoignables' element={<UnreachableClients />} />)}
  {authCtx.isLoggedIn && ( <Route path='/reservations' element={<Reservations />} />)}
  {authCtx.isLoggedIn && ( <Route path='/annulees' element={<CancelledOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/retours' element={<ReturnedOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/en-cours-de-livraison' element={<InDeliveryOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/livrees' element={<DeliveredOrders />} />)}
  {authCtx.isLoggedIn && ( <Route path='/toute-les-commandes' element={<AllOrdersPage />} />)}
  {authCtx.isLoggedIn && ( <Route path='/livreurs' element={<DeliveryGuysPage />} />)}
  {authCtx.isLoggedIn && ( <Route path='*' element={<NotFoundPage />} /> )}

  {authCtx.isLoggedIn && ( <Route path='/page-livreur/:delivery_guy_id' element={<DeliveryGuysDetailPage />} />)}
  {authCtx.isLoggedIn && ( <Route path='/detail-echange/:exchange_id' element={<ExchangeDetail />} />)}
  {authCtx.isLoggedIn && ( <Route path='/detail-cmd/:order_id' element={<OrderDetails />} />)}

  {!authCtx.isLoggedIn && ( <Route path='/' element={<Login />} /> )}
  {!authCtx.isLoggedIn && ( <Route path='/login' element={<Login />} />)}
  {!authCtx.isLoggedIn && <Route path='*' element={<Navigate replace to='/login' />} />}


      
    </Routes>
  </Layout>
  );
}

export default App;
