import { useEffect } from 'react';
import { Fragment } from 'react';
import UnreachableClientsComponent from "../components/Orders/UnreachableClientsComponent";
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getUnavailableClients } from '../lib/api';

const UnreachableClients = () => {
  const { sendRequest, status, data: loadedOrders, error } = useHttp(
    getUnavailableClients,
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
        <h1> Clients injoignables : {loadedOrders.length} </h1>
        <p>Pas de clients injoignables</p>
      </div>
      )
  }
    return (
      <Fragment>
        <h1> Clients injoignables : {loadedOrders.length} </h1>
        <UnreachableClientsComponent orders={loadedOrders} orderLength={loadedOrders.length} />
      </Fragment>    
    );
  };
  
  export default UnreachableClients;
  