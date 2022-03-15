import { useEffect } from 'react';
import { Fragment } from 'react';
import NotTreatedOrdersComponent from "../components/Orders/NotTreatedOrdersComponent";
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getNotTreatedOrders } from '../lib/api';

const NotTreatedOrders = () => {
  const { sendRequest, status, data: loadedOrders, error } = useHttp(
    getNotTreatedOrders,
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
        <h1> Commandes pas encore traitées : {loadedOrders.length} </h1>
        <p>Pas de commandes non traitées</p>
      </div>
      )
  }
    return (
      <Fragment>
        <h1> Commandes pas encore traitées : {loadedOrders.length} </h1>
        <NotTreatedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
      </Fragment>    
    );
  };
  
  export default NotTreatedOrders;
  