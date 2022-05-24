import { useEffect } from 'react';
import { Fragment } from 'react';
// import ConfirmedOrdersComponent from "../components/Orders/ConfirmedOrdersComponent";
import InDeliveryOrdersComponent from '../components/Orders/InDeliveryOrdersComponent';
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getInDeliveryOrders } from '../lib/api';

import './Common.css';

function InDeliveryOrders (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
        getInDeliveryOrders,
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
            <h1 className='title'> Commandes en cours de livraison : {loadedOrders.length} </h1>
            <p className='title'>Pas de commandes en cours de livraison</p>
          </div>
          )
      }
        return (
          <Fragment>
            <h1 className='title'> Commandes en cours de livraison : {loadedOrders.length} </h1>
            <InDeliveryOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default InDeliveryOrders;