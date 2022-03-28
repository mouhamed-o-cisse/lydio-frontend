import { Fragment, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';

import HighlightedExchange from '../components/Exchange/HighlightedExchange';
import useHttp from '../hooks/use-http';
import useHttp2 from '../hooks/use-http2';
import { getSingleExchange, updateExchangeStatus } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ExchangeStatusButtons from '../components/StatusButtons/ExchangeStatusButtons';


function ExchangeDetail (){
    const params = useParams();

    const { exchange_id } = params;
  
    const { sendRequest, status, data: loadedOrder, error } = useHttp(
        getSingleExchange,
      true
    );
  
    // const [ isNotVisible, setIsVisible ] = useState(false);

    // console.log(loadedOrder)
  
    const { sendRequest2, status2 } = useHttp2(updateExchangeStatus);
   
    useEffect(() => {
      sendRequest(exchange_id);
    }, [sendRequest, exchange_id]);
  
    if (status === 'pending') {
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    }
  
    if (error) {
      return <p className='centered'>{error}</p>;
    }
  
    if (!loadedOrder) {
      return <p>No quote found!</p>;
    }
  
    if (status2 === 'pending'){
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    }

    const updateExchangeStatusHandler = (exchangeUpdateData) => {
      sendRequest2(exchangeUpdateData);
      };
  
    if (error) {
      return <p className='centered'>{error}</p>;
    }
  
    if (status2 === 'completed-error'){
      return (
        <div className='centered'>
          <p>an error occured</p>
        </div>
      );
    }

    console.log('successfull')
  
    return (
      <Fragment>
        <HighlightedExchange 
        exchange_id={loadedOrder.exchange_id} 
        watch_to_exchange={loadedOrder.watch_to_exchange}
        watch_to_exchange_price={loadedOrder.watch_to_exchange_price}
        replaced_watch={loadedOrder.replaced_watch}
        replaced_watch_price={loadedOrder.replaced_watch_price}
        price_difference={loadedOrder.price_difference}
        names={loadedOrder.names}
        client_phone_number={loadedOrder.client_phone_number}
        comment={loadedOrder.comment}
        delivery_address={loadedOrder.delivery_address}
        delivery_price={loadedOrder.delivery_price}
        delivery_guy={loadedOrder.delivery_guy}
        print_status={loadedOrder.print_status}
        delivery_status={loadedOrder.delivery_status}
        delivery_status_last_update={loadedOrder.delivery_status_last_update}
        delivery_date={loadedOrder.delivery_date}
        exchange_date={loadedOrder.exchange_date}
        registration_date={loadedOrder.registration_date}
        />
      {/* <p>{loadedOrder.exchange_id}</p> */}
      <Outlet />
      <ExchangeStatusButtons exchange_id={loadedOrder.exchange_id} onUpdateExchangeStatus={updateExchangeStatusHandler}/>
      </Fragment>
    ); 
}

export default ExchangeDetail;