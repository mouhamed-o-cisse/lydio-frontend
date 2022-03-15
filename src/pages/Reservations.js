import { useEffect } from 'react';
import { Fragment } from 'react';
import ReservationsComponent from "../components/Orders/ReservationsComponent";
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getReservations } from '../lib/api';

const Reservations = () => {
  const { sendRequest, status, data: loadedOrders, error } = useHttp(
    getReservations,
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
        <h1> Commandes en réservation : {loadedOrders.length} </h1>
        <p>Pas de commandes en réservation</p>
      </div>
      )
  }
    return (
      <Fragment>
        <h1> Commandes en réservation : {loadedOrders.length} </h1>
        <ReservationsComponent orders={loadedOrders} orderLength={loadedOrders.length} />
      </Fragment>    
    );
  };
  
  export default Reservations;
  