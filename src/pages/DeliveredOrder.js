import { useEffect } from 'react';
import { Fragment } from 'react';
import DeliveredOrdersComponent from '../components/Orders/DeliveredOrdersComponent';
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getDeliveredOrders } from '../lib/api';

import './Common.css';

function DeliveredOrders (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
      getDeliveredOrders,
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
         <div>
            <h1 className='title'> Commandes livrées : {loadedOrders.length} </h1>
            <p className='title'>Pas de commandes livrées</p>
          </div>
          )
      }
        return (
          <Fragment>
            <h1 className='title'> Commandes livrées : {loadedOrders.length} </h1>
            <DeliveredOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default DeliveredOrders;