import { useEffect } from 'react';
import { Fragment } from 'react';
import ConfirmedOrdersComponent from "../components/Orders/ConfirmedOrdersComponent";
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getConfirmedOrders } from '../lib/api';
import { Link } from 'react-router-dom';

import './Common.css';

function ConfirmedOrders (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
        getConfirmedOrders,
        true
      );
    
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
    
    
      if (status === 'pending') {
        return (
          <div className='centered'>
            {/* <LoadingSpinner /> */}
            <p>Loading...</p>
          </div>
        );
      }
    
      if (error) {
        return <p className='centered focused'> {error}</p>;
      }
    
      if (status === 'completed-successfully' && (!loadedOrders || loadedOrders.length === 0)) {
        // return <NoQuotesFound />;
        return (
         <div className='noorder'>
            <h1 className='title'> Commandes confirmées : {loadedOrders.length} </h1>
            <p className='title'>Pas de commandes confirmées</p>
            {/* <p className='btn link'>wm</button> */}
            <Link className='btn link' to={`/livreurs`}>
               Aller à la page des liveurs
            </Link>
          </div>
          )
      }
        return (
          <Fragment>
            <h1 className='title'> Commandes confirmées : {loadedOrders.length} </h1>
            <ConfirmedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default ConfirmedOrders;