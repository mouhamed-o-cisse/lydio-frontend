import { Link } from 'react-router-dom';

import classes from './OrderItem.module.css';

function OrderItem (props){
    return (
      <tr className={classes.all}>
        <td>{props.shopify_order_id}</td>
        <td>{props.names} </td>
        <td>{props.client_phone_number}</td>
        <td>{props.delivery_address}</td>
        <td>{props.registration_date}</td>
        <td>{props.order_date}</td>
        { props.order_status === 'reservation' &&  <td>{props.delivery_date} <br /> <span> Der maj du statut de liv : <br/> {props.order_status_last_update} </span> </td> }
        { props.order_status === 'confirmed' &&  <td>{props.delivery_date} </td> }
        { props.order_status === 'confirmed' &&  <td>{props.comment} </td> }
        { props.order_status === 'confirmed' &&  <td>{props.creneau} </td> }
        { props.order_status === 'confirmed' &&  <td>{props.order_status_last_update} </td> }
        {/* <td>{props.delivery_status}</td> */}
        {/* <td>{props.comment}</td> */}
        {/* <td>{props.creneau}</td> order_status_last_update*/}
        <td>
          <Link className='btn' to={`/detail-cmd/${props.order_id}`}>
               Details
          </Link>
        </td>
      </tr>
      );
}

export default OrderItem;