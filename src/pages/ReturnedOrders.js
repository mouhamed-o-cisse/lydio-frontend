import { useEffect } from 'react';
import { Fragment } from 'react';
import ConfirmedOrdersComponent from "../components/Orders/ConfirmedOrdersComponent";
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getReturnedOrder } from '../lib/api';

import './Common.css';

function ReturnedOrders (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
        getReturnedOrder,
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
            <h1 className='title'> Retours : {loadedOrders.length} </h1>
            <p className='title'>Pas de retours</p>
          </div>
          )
      }
        return (
          <Fragment>
            <h1 className='title'> Retours : {loadedOrders.length} </h1>
            <ConfirmedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default ReturnedOrders;