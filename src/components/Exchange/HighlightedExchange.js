// import { Link, useParams } from 'react-router-dom';
import classes from './HighlightedExchange.module.css';
// import { useState } from 'react';
// import ModalForm from '../Modal/ModalForm';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useHttp from '../../hooks/use-http';
// import { updateOrder } from '../../lib/api';

// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

const HighlightedExchange = (props) => {

//   const { sendRequest, status, error } = useHttp(updateOrder);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (status === 'completed-error') {
//       // navigate('/quotes');
//       console.log('finished but an error occured')
//     }
//     if (status === 'completed-successfully') {
//       navigate('/');
//       console.log('finished and succefull')
//     }
//     if (error) {
//       console.log(error)
//       return <p className='centered'>{error}</p>;
//     }
//   }, [status, navigate, error]);

//   const updateOrderHandler = (orderUpdateData) => {
//   sendRequest(orderUpdateData);
//   };

  return (
    <figure className={classes.quote}>
      <p>{props.names}</p>
      <figcaption>{props.watch_to_exchange}</figcaption>
      <figcaption>{props.watch_to_exchange_price}</figcaption>
      <figcaption>{props.replaced_watch}</figcaption>
      <figcaption>{props.replaced_watch_price}</figcaption>
      <figcaption>{props.price_difference}</figcaption>
      <figcaption>{props.names}</figcaption>
      <figcaption>{props.client_phone_number}</figcaption>
      <figcaption>{props.comment}</figcaption>
      <figcaption>{props.delivery_address}</figcaption>
      <figcaption>{props.delivery_price}</figcaption>
      <figcaption>{props.delivery_guy}</figcaption>
      <figcaption>{props.print_status}</figcaption>
      <figcaption>{props.delivery_status}</figcaption>
      <figcaption>{props.delivery_status_last_update}</figcaption>
      <figcaption>{props.delivery_date}</figcaption>
      <figcaption>{props.exchange_date}</figcaption>
      <figcaption>{props.registration_date}</figcaption>
    </figure>
  );
};

export default HighlightedExchange;
