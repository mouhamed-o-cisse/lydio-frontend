import { useEffect } from 'react';
import { Fragment } from 'react';
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getDeliveryGuysList } from '../lib/api';
import ListOfDeliveryGuys from '../components/DeliveryGuy/ListOfDeliveryGuys';

import './Common.css';

function DeliveryGuysPage (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
        getDeliveryGuysList,
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
            <h1 className='title'> Page des livreurs </h1>
            {/* <ConfirmedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} /> */}
            <ListOfDeliveryGuys />
          </Fragment>    
        );
}

export default DeliveryGuysPage;