import { Fragment } from 'react';
import OrderItem from './OrderItem';
import classes from './ConfirmedOrdersComponent.module.css';

function ConfirmedOrdersComponent (props){
    const orders = props.orders;

    return (
        <Fragment>
        <ul className={classes.list}>
          {orders.map((orders) => (
            <OrderItem
              key={orders.order_id}
              order_id={orders.order_id}
              order_date={orders.order_date}
              names={orders.names}
              client_phone_number={orders.client_phone_number}
              delivery_address={orders.delivery_address}
              registration_date={orders.registration_date}
              shopify_order_id={orders.shopify_order_id}
              watch_brand_and_model={orders.watch_brand_and_model}
              watch_price={orders.watch_price}
            />
          ))}
        </ul>
      </Fragment>
    ) 
}

export default ConfirmedOrdersComponent;