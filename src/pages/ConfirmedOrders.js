import { useEffect } from 'react';
import { Fragment } from 'react';
import ConfirmedOrdersComponent from "../components/Orders/ConfirmedOrdersComponent";
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getConfirmedOrders } from '../lib/api';

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
            <LoadingSpinner />
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
            <h1> Commandes confirmées : {loadedOrders.length} </h1>
            <p>Pas de commandes confirmées</p>
          </div>
          )
      }
        return (
          <Fragment>
            <h1> Commandes confirmées : {loadedOrders.length} </h1>
            <ConfirmedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
          </Fragment>    
        );
}

export default ConfirmedOrders;