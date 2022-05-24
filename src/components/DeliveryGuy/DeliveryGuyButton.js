import Card from "../UI/Card";
// import classes from '../StatusButtons/DeliveryStatusButtons.module.css';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import DeliveryGuyList from "../DeliveryGuy/DeliveryGuyList";



function DeliveryGuyButton (props){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const style ={
      fontSize: '20px',
      textAlign: 'center',
      fontWeight: 'bold'
    }
    

    return (
        <Card>

        {/* <div className={classes.whole}> */}

          <>
            { !props.delivery_guy && <button variant="primary" className='btn' onClick={handleShow}>
                Affecter
            </button>}

            { props.delivery_guy && <button variant="primary" className='btn' onClick={handleShow}>
                Modifier 
            </button>}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mise à jour du statut de livraison</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              
              <div>
                <p style={style}>Liste des livreurs</p>
                <DeliveryGuyList delivery_guy={props.delivery_guy} order_id = {props.order_id} />
              </div>
              
              </Modal.Body>
              {/* <Modal.Footer>
        
             </Modal.Footer> */}
            </Modal>
        </>
        
        {/* </div> */}
            
        </Card>
        )
}

export default DeliveryGuyButton;


