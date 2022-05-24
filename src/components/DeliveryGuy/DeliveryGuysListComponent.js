import { Fragment } from 'react';
import DeliveryGuyAffectation from './DeliveryGuyAffectation';
import useHttp2 from '../../hooks/use-http2';
import { useEffect } from 'react';
import { updateDeliveryGuy } from '../../lib/api';




function DeliveryGuysListComponent (props){

  let deliveryGuys = [];

  const delivery_guys = props.orders;
  // console.log(delivery_guys)

  delivery_guys.forEach(order => {
    if (order.delivery_guy_id !== props.delivery_guy){
      deliveryGuys.push(order);
      // console.log(order.delivery_guy_id, props.delivery_guy)
    }
  });

  const { sendRequest2, status2, error2 } = useHttp2(updateDeliveryGuy);

  // let message = 'yes';
  function refreshPage() {
    window.location.reload(false);
  }


  const updateDeliveryGuyHandler = (DeliveryStatusUpdateData) => {
    sendRequest2(DeliveryStatusUpdateData);
    };

  // const updateDeliveryGuyHandler = (DeliveryStatusUpdateData) => {
  //   console.log('okayyy', DeliveryStatusUpdateData)
  //   };
  
    useEffect(() => {
  
      if (status2 === 'completed-error'){
        console.log('error', error2)
      }
    
      if (status2 === 'completed-successfully') {
        // navigate(-1);
        refreshPage();
        console.log('finished and succefull')
      }
    }, [status2, error2]);
    

               
    return (
        <Fragment>
          {props.delivery_guy && <p> Livreur actuel <span className='btn'>{props.delivery_guy}</span></p>}
          {!props.delivery_guy && <p> Affecté à aucun livreur pour le moment </p>}
        <div>
        {deliveryGuys.map((delivery_guy) => (
                <DeliveryGuyAffectation 
                  key={delivery_guy.delivery_guy_id} 
                  order_id={props.order_id}
                  delivery_guy_id={delivery_guy.delivery_guy_id} 
                  names={delivery_guy.names} 
                  onSetDeliveryGuy={updateDeliveryGuyHandler}
                />
        ))}        
        </div>
      </Fragment>
    )  
}

export default DeliveryGuysListComponent;