import { Link } from 'react-router-dom';

import classes from './OrderItem.module.css';

function OrderItem (props){
    return (
        <li className={classes.item}>
          <figure>
            <blockquote>
              <p>{props.shopify_order_id}</p>
            </blockquote>
            <figcaption>{props.names}</figcaption>
            <figcaption>{props.client_phone_number}</figcaption>
            <figcaption>{props.delivery_address}</figcaption>
            <figcaption>{props.registration_date}</figcaption>
            <figcaption>{props.watch_brand_and_model}</figcaption>
            <figcaption>{props.watch_price}</figcaption>
            <figcaption>{props.order_date}</figcaption>
            <figcaption>{props.order_date}</figcaption>
          </figure>
          <Link className='btn' to={`/detail-cmd/${props.order_id}`}>
            View The detail
          </Link>
        </li>
      );
}

export default OrderItem;