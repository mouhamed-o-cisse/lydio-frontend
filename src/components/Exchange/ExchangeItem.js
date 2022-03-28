import { Link } from 'react-router-dom';

import classes from './ExchangeItem.module.css';

function ExchangeItem (props){
    return (
        <li className={classes.item}>
          <figure>
            <blockquote>
              <p>{props.names}</p>
            </blockquote>
            <figcaption>{props.client_phone_number}</figcaption>
            <figcaption>{props.delivery_address}</figcaption>
            <figcaption>{props.registration_date}</figcaption>
            <figcaption>{props.watch_to_exchange}</figcaption>
            <figcaption>{props.watch_to_exchange_price}</figcaption>
            <figcaption>{props.replaced_watch}</figcaption>
            <figcaption>{props.watch_to_exchange_price}</figcaption>
            <figcaption>{props.exchange_date}</figcaption>
            <figcaption>{props.replaced_watch_price}</figcaption>
          </figure>
          <Link className='btn' to={`/detail-echange/${props.exchange_id}`}>
            View The detail
          </Link>
        </li>
      );
}

export default ExchangeItem;