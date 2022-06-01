import { useEffect } from 'react';
import { Fragment } from 'react';
import AllOrdersComponent from '../components/Orders/AllOrdersComponent';
import useHttp from '../hooks/use-http';
import { getAllOrders } from '../lib/api';

import './Common.css';

function AllOrdersPage (){
    const { sendRequest, status, data: loadedOrders, error } = useHttp(
        getAllOrders,
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
            <h1 className='title'> Commandes : {loadedOrders.length} </h1>
            <p className='title'>Pas de commandes</p>
          </div>
          )
      }
        return (
          <Fragment>
            <h1 className='title'> Toutes les commandes : {loadedOrders.length} </h1>
            <AllOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default AllOrdersPage;