import { useEffect } from 'react';
import { Fragment } from 'react';
import NotTreatedOrdersComponent from "../components/Orders/NotTreatedOrdersComponent";
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getNotTreatedOrders } from '../lib/api';
import './Common.css';

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
        <p>Loading...</p>
        {/* <LoadingSpinner /> */}
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
        <h1 className='title'> Commandes pas encore traitées : {loadedOrders.length} </h1>
        <p className='title'>Pas de commandes non traitées</p>
      </div>
      )
  }
    return (
      <Fragment>
        <h1 className='title'> Commandes pas encore traitées : {loadedOrders.length} </h1>
        <NotTreatedOrdersComponent orders={loadedOrders} orderLength={loadedOrders.length} />
      </Fragment>    
    );
  };
  
  export default NotTreatedOrders;
  