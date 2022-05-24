import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import OrdersToBring from '../components/DeliveryGuy/OrdersToBring';
import BroughtOrders from '../components/DeliveryGuy/BroughtOrders';

import useHttp from '../hooks/use-http';
import useHttp2 from '../hooks/use-http2';
import { getSingleDeliveryGuy, getDeliveryGuyOrders } from '../lib/api';
// import LoadingSpinner from '../components/UI/LoadingSpinner';

import './thecssfile.css';

import './Common.css';

function DeliveryGuysDetailPage (){
  const params = useParams();

  const { delivery_guy_id } = params;

  const { sendRequest, status, data: loadedOrder, error } = useHttp(
    getSingleDeliveryGuy,
    true
  );

  const { sendRequest2, status2, data: loadedOrders, error2 } = useHttp2(
    getDeliveryGuyOrders,
    true
  );

//  1
  useEffect(() => {
    sendRequest(delivery_guy_id);
  }, [sendRequest, delivery_guy_id]);

// 2
  useEffect(() => {
    sendRequest2(delivery_guy_id);
  }, [sendRequest2, delivery_guy_id]);


// 1
  if (status === 'pending') {
    return (
      <div className='centered'>
        {/* <LoadingSpinner /> */}
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedOrder) {
    return <p>Pas de commandes!</p>;
  }

  // 2
  if (status2 === 'pending') {
    return (
      <div className='centered'>
        {/* <LoadingSpinner /> */}
        <p>Loading...</p>
      </div>
    );
  }

  if (error2) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedOrders) {
    return <p>Pas de commandes!</p>;
  }

 
  console.log(loadedOrders)
  return (
    <Fragment>   

      <h1 className='title'> Page livreur de : {loadedOrder.names}</h1> 
         
      <OrdersToBring orders={loadedOrders} delivery_guy_name={loadedOrder.names} /> 

      <BroughtOrders orders={loadedOrders} /> 
      
    </Fragment>
  ); 
}

export default DeliveryGuysDetailPage;

