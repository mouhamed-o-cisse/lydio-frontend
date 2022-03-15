import { Fragment, useState } from 'react';
import AddNewOrder from '../components/Orders/AddNewOrder';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { newOrder } from '../lib/api';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function HomePage (){
    
  const { sendRequest, status, error } = useHttp(newOrder);
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

  const newOrderHandler = (orderData) => {
  sendRequest(orderData);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <Fragment>
    
      {error && <p>there is  an error</p>}

      <>
      <Button variant="primary" onClick={handleShow}>
        Nouvelle commande
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nouvelle commande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {error && <p>there is  an error {error}</p>}
        {status === 'completed-successfully' && <p>The task was completed successfully</p>}
          <AddNewOrder 
              isLoading={status === 'pending'} 
              onNewOrder={newOrderHandler}
          />
        </Modal.Body>
      </Modal>
    </>
      
    </Fragment>
  );
}

export default HomePage;