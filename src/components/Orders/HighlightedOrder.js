// import { Link, useParams } from 'react-router-dom';
import classes from './HighlightedOrder.module.css';
import { useState } from 'react';
import ModalForm from '../Modal/ModalForm';
// import ModalInformation from '../Modal/ModalInformation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { updateOrder } from '../../lib/api';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HighlightedOrder = (props) => {

  const { sendRequest, status, error } = useHttp(updateOrder);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'completed-error') {
      // navigate('/quotes');
      console.log('finished but an error occured')
    }
    if (status === 'completed-successfully') {
      navigate('/');
      console.log('finished and succefull')
    }
    if (error) {
      console.log(error)
      return <p className='centered'>{error}</p>;
    }
  }, [status, navigate, error]);

  const updateOrderHandler = (orderUpdateData) => {
  sendRequest(orderUpdateData);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <figure className={classes.quote}>
      <p>{props.names}</p>
      <figcaption>{props.names}</figcaption>
      <figcaption>{props.order_date}</figcaption>
      <figcaption>{props.client_phone_number}</figcaption>
      <figcaption>{props.delivery_address}</figcaption>
      <figcaption>{props.registration_date}</figcaption>
      <figcaption>{props.shopify_order_id}</figcaption>
      <figcaption>{props.watch_brand_and_model}</figcaption>
      <figcaption>{props.watch_price}</figcaption>
      <figcaption>{props.quantity}</figcaption>
      <figcaption>{props.delivery_price}</figcaption>
      <figcaption>{props.comment}</figcaption>
      <figcaption>{props.order_treatment}</figcaption>
      <figcaption>{props.order_status}</figcaption>
      <figcaption>{props.order_status_last_update}</figcaption>
      <figcaption>{props.delivery_status}</figcaption>
      <figcaption>{props.delivery_status_last_update}</figcaption>
      <figcaption>{props.print_status}</figcaption>
      <figcaption>{props.payment_status}</figcaption>
      <figcaption>{props.client_review}</figcaption>
      <figcaption>{props.delivery_date}</figcaption>
      {/* <figcaption>{props.watch_price}</figcaption>
      <figcaption>{props.watch_price}</figcaption> */}

      {error && <p>there is  an error</p>}

      <>
      <Button variant="primary" onClick={handleShow}>
        Modifier la commande
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Entete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <p>there is  an error {error}</p>}
        {status === 'completed-successfully' && <p>The task was coompleted successfully</p>}
          <ModalForm 
              isLoading={status === 'pending'} 
              onUpdateOrder={updateOrderHandler}
              previousNames = {props.names} 
              previousClientPhoneNumber = {props.client_phone_number} 
              previousDeliveryAddress = {props.delivery_address} 
              previousWatchBrandAndModel = {props.watch_brand_and_model} 
              previousWatchPrice = {props.watch_price} 
              previousDeliveryPrice = {props.delivery_price} 
              previousComment = {props.comment} 
              order_id = {props.order_id} 
          />
        </Modal.Body>
      </Modal>
    </>
      
    </figure>
  );
};

export default HighlightedOrder;
