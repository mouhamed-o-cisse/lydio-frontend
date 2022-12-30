import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import HighlightedOrder from '../components/Orders/HighlightedOrder';
import useHttp from '../hooks/use-http';
import useHttp2 from '../hooks/use-http2';
import { getSingleOrder, updateStatus } from '../lib/api';
// import LoadingSpinner from '../components/UI/LoadingSpinner';
import StatusButtons from '../components/StatusButtons/StatusButtons';

import './thecssfile.css';

import './Common.css';


function OrderDetails (){
  const params = useParams();

  const navigate = useNavigate();

  const { order_id } = params;

  const { sendRequest, status, data: loadedOrder, error } = useHttp(
    getSingleOrder,
    true
  );

  // const [ isNotVisible, setIsVisible ] = useState(false);

  const { sendRequest2, status2 } = useHttp2(updateStatus);
 
  useEffect(() => {
    sendRequest(order_id);
  }, [sendRequest, order_id]);

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
    return <p>No quote found!</p>;
  }

  const updateStatusHandler = (quoteUpdateData) => {
  sendRequest2(quoteUpdateData);
  };

  // function refreshPage() {
  //   window.location.reload(false);
  // }

  if (status2 === 'pending'){
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

  if (status2 === 'completed-error'){
    return (
      <div className='centered'>
        <p>an error vvv occured</p>
      </div>
    );
  }

  // refreshPage();

  if (status2 === 'completed-successfully'){
    navigate(-1);
    // refreshPage();
    // return (
    //   <div className='centered'>
    //     <p>Sent successfully</p>
    //   </div>
    // );
  }

  // function visible () {
  //   setIsVisible(true);
  // }
  // function invisible () {
  //   setIsVisible(false);
  // }

  return (
    <Fragment>
      {/* {isNotVisible && <p>THis is visible</p>}
      <button onClick={visible}>My visible button</button>
      <button onClick={invisible}>My invisible button</button> */}
      <HighlightedOrder 
        order_id={loadedOrder.order_id} 
        invoice_id={loadedOrder.invoice_id} 
        names={loadedOrder.names} 
        order_date={loadedOrder.order_date}
        client_phone_number={loadedOrder.client_phone_number}
        delivery_address={loadedOrder.delivery_address}
        registration_date={loadedOrder.registration_date}
        shopify_order_id={loadedOrder.shopify_order_id}
        watch_brand_and_model={loadedOrder.watch_brand_and_model}
        watch_price={loadedOrder.watch_price}
        quantity={loadedOrder.quantity}
        delivery_price={loadedOrder.delivery_price}
        delivery_guy={loadedOrder.delivery_guy}
        comment={loadedOrder.comment}
        order_treatment={loadedOrder.order_treatment}
        order_status={loadedOrder.order_status}
        order_status_last_update={loadedOrder.order_status_last_update}
        delivery_status={loadedOrder.delivery_status}
        delivery_status_last_update={loadedOrder.delivery_status_last_update}
        print_status={loadedOrder.print_status}
        payment_status={loadedOrder.payment_status}
        client_review={loadedOrder.client_review}
        delivery_date={loadedOrder.delivery_date}
        creneau={loadedOrder.creneau}
        person_to_join_in_case={loadedOrder.person_to_join_in_case}
        />
      {/* <p>{loadedOrder.order_id}</p> */}
      <Outlet />
      <StatusButtons 
      order_id={loadedOrder.order_id} 
      order_status={loadedOrder.order_status} 
      delivery_status={loadedOrder.delivery_status}
      order_treatment={loadedOrder.order_treatment} 
      onUpdateQuoteStatus={updateStatusHandler}/>
    </Fragment>
  ); 
}

export default OrderDetails;