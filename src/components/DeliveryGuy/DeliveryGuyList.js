import { useEffect } from 'react';
import { Fragment } from 'react';
import DeliveryGuysListComponent from "./DeliveryGuysListComponent";
// import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../../hooks/use-http';
import { getDeliveryGuysList } from '../../lib/api';


// import './Common.css';

const DeliveryGuyList = (props) => {
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
        {/*  */}<p>Loading...</p>
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
        <h1 className='title'> Liste des livreurs : {loadedOrders.length} </h1>
        <p className='title'>Pas de livreurs</p>
      </div>
      )
  }
    return (
      <Fragment>
        {/* <h5 className='title'> Livreurs : {loadedOrders.length} </h5> */}
        <DeliveryGuysListComponent delivery_guy={props.delivery_guy} order_id = {props.order_id} orders={loadedOrders} orderLength={loadedOrders.length} />
      </Fragment>    
    );
  };
  
  export default DeliveryGuyList; 
  