import { Fragment } from 'react';
import ExchangeItem from './ExchangeItem';
import classes from './GetExchanges.module.css';

function GetExchanges (props){
    const exchanges = props.exchanges;

    return (
        <Fragment>
        <ul className={classes.list}>
          {exchanges.map((exchanges) => (
            <ExchangeItem
              key={exchanges.exchange_id}
              exchange_id={exchanges.exchange_id}
              exchange_date={exchanges.exchange_date}
              names={exchanges.names}
              client_phone_number={exchanges.client_phone_number}
              delivery_address={exchanges.delivery_address}
              registration_date={exchanges.registration_date}
              watch_to_exchange={exchanges.watch_to_exchange}
              watch_to_exchange_price={exchanges.watch_to_exchange_price}
              replaced_watch={exchanges.replaced_watch}
              replaced_watch_price={exchanges.replaced_watch_price}
            />
          ))}
        </ul>
      </Fragment>
    )  
}

export default GetExchanges;