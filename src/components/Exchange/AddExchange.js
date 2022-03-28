import { Fragment, useState } from 'react';
import AddExchangeComponent from './AddExchangeComponent';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { newExchange } from '../../lib/api';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddExchanges (){

    const { sendRequest, status, error } = useHttp(newExchange);
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
  
    const newExchangeHandler = (exchangeData) => {
    sendRequest(exchangeData);
    };
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
      
        <>
        <Button variant="primary" onClick={handleShow}>
          Nouvel échange
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nouvel échange</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {error && <p>there is  an error {error}</p>}
          {status === 'completed-successfully' && <p>The task was completed successfully</p>}
            <AddExchangeComponent 
                isLoading={status === 'pending'} 
                onNewExchange={newExchangeHandler}
            />
          </Modal.Body>
        </Modal>
      </>
        
      </Fragment>
    )
}

export default AddExchanges;