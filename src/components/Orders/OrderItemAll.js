import { Link } from 'react-router-dom';
// import DeliveryGuyList from "../DeliveryGuy/DeliveryGuyList";
import classes from './OrderItem.module.css';
// import DeliveryGuyButton from '../DeliveryGuy/DeliveryGuyButton';
// import { Fragment } from 'react';
// import useHttp2 from '../../hooks/use-http2';
// import { updateStatus } from '../../lib/api';

function OrderItemAll (props){

  // let eachDate = '';
  // // let eachDatefull = ''; 

  // let orders = props.orders

  // let validOrders = [];

  // orders.forEach(order => {
  //   if (order.delivery_status === "in-delivery"){
  //     validOrders.push(order);
  //   }
  // });

  // orders.forEach(order => {
  //   eachDate = new Date (order.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full' })
  // });

//   const { sendRequest2, status2 } = useHttp2(updateStatus);

//   const updateStatusHandler = (quoteUpdateData) => {
//     sendRequest2(quoteUpdateData);
//     };

//     if (status2 === 'pending'){
//       return (
//         <div className='centered'>
//           {/* <LoadingSpinner /> */}
//           <p>Loading...</p>
//         </div>
//       );
//     }
  
//     if (status2 === 'completed-error'){
//       return (
//         <div className='centered'>
//           <p>an error occured</p>
//         </div>
//       );
//     }
  
  
//     if (status2 === 'completed-successfully'){
//       console.log('success')
//     }

    // let deliveryDate = '';
    // let registrationDate = '';
    // let orderDate = '';
    // let orderStatusLastUpdate = '';

    // orders.forEach(order => {
    //   deliveryDate = new Date (props.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full' })
    //   registrationDate = new Date (props.registration_date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short'})
    //   orderDate = new Date (props.order_date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })
    //   orderStatusLastUpdate = new Date (props.order_status_last_update).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'medium' })
    // });

    return (
       <tr className={classes.all}>
        {props.shopify_order_id && <td>{props.shopify_order_id}</td> }
        {!props.shopify_order_id && <td>neant</td> }
        <td>{props.names}</td>
        <td>{props.client_phone_number}</td>
        <td>{props.delivery_address}</td>

        { props.order_status === 'confirmed' &&  <td>Confirmé</td> }
        { props.order_status === 'reservation' &&  <td>Réservation</td> }
        { props.order_status === 'unreachable' &&  <td>Injoignable</td> }
        { props.order_status === 'cancelled' &&  <td>Annulé</td> }
        { !props.order_status &&  <td>rien</td> }
        {/* { props.delivery_status &&  <td>{props.delivery_status}</td> } */}

        { props.delivery_status === 'untouched' &&  <td>Non classé </td> }
        { props.delivery_status === 'in-delivery' &&  <td>En cours de livraison</td> }
        { props.delivery_status === 'return' &&  <td>Retour</td> }
        { props.delivery_status === 'delivered' &&  <td>Livré</td> }

        { props.delivery_guy &&  <td>{props.delivery_guy}</td> }
        { !props.delivery_guy &&  <td>Pas de livreur</td> }


        {/* <td>{registrationDate}</td>
        <td>{orderDate}</td>
        { props.delivery_date &&  <td>{deliveryDate}</td> }
        { !props.delivery_date &&  <td>Pas de date de livraison</td> } */}
        {/* { props.comment &&  <td>{props.comment}</td> }
        { !props.comment &&  <td>Pas de commentaire</td> } */}
        {/* { ( props.order_status === 'reservation' && props.delivery_status !== 'in-delivery' ) &&  <td>{deliveryDate} <br /> <span> Der maj du statut de liv : <br/> {orderStatusLastUpdate} </span> </td> }
        { props.order_status === 'confirmed' &&  <td>{deliveryDate}</td> }
        { props.order_status === 'confirmed' &&  <td>{props.comment}</td> }
        { (props.order_status === 'confirmed' && props.delivery_status !== 'in-delivery' ) &&  <td>{props.creneau}</td> }
        { (props.order_status === 'confirmed' && props.delivery_status !== 'in-delivery') &&  <td>{orderStatusLastUpdate}</td> }
        { props.delivery_guy &&  <td>{props.delivery_guy}</td> }
        { !props.delivery_guy &&  <td>Pas de liveur</td> } */}
        
        <td>
          <Link className='btn' to={`/detail-cmd/${props.order_id}`}>
               Details
          </Link>
        </td>
        {/* { (props.order_status === 'confirmed' && props.delivery_status !== 'delivered' ) &&  
        <td> <DeliveryGuyButton delivery_guy={props.delivery_guy} order_id= {props.order_id} onUpdateQuoteStatus={updateStatusHandler} /></td> } */}
      </tr>
      ); 
}

export default OrderItemAll;
