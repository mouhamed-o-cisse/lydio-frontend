import { Link } from 'react-router-dom';
import classes from './OrderItem.module.css';


function OrderItemAll (props){


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
        { props.delivery_status === 'in-preparation' &&  <td>En attente </td> }
        { props.delivery_status === 'in-delivery' &&  <td>En cours de livraison</td> }
        { props.delivery_status === 'return' &&  <td>Retour</td> }
        { props.delivery_status === 'delivered' &&  <td>Livré</td> }

        { props.delivery_guy &&  <td>{props.delivery_guy}</td> }
        { !props.delivery_guy &&  <td>Pas de livreur</td> }

        
        <td>
          <Link className='btn' to={`/detail-cmd/${props.order_id}`}>
               Details
          </Link>
        </td>
      </tr>
      ); 
}

export default OrderItemAll;
