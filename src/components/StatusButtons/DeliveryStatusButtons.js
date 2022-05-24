import Card from "../UI/Card";
import classes from './DeliveryStatusButtons.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import DeliveryGuyList from "../DeliveryGuy/DeliveryGuyList";



function DeliveryStatusButtons (props){

    // function submitInDeliveryHandler(event) {
    //     event.preventDefault();

    //     const delivery_status = 'in-delivery';
    //     const order_id = props.order_id

    //     props.onUpdateOrderDeliveryStatus({ delivery_status: delivery_status, order_id : order_id});
    // }

    function submitDeliveredHandler(event) {
        event.preventDefault();

        const delivery_status = 'delivered';
        const order_id = props.order_id

        props.onUpdateOrderDeliveryStatus({ delivery_status: delivery_status, order_id : order_id });
    }

    function submitReturnHandler(event) {
      event.preventDefault();

      const delivery_status = 'return';
      const order_id = props.order_id

      props.onUpdateOrderDeliveryStatus({ delivery_status: delivery_status, order_id : order_id });
  }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    

    return (
        <Card>

        <div className={classes.whole}>

        { (props.order_status === 'confirmed' && props.delivery_status !== 'delivered' && props.delivery_status !== 'return' )  &&
          <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow}>
            Mettre à jour du statut de livraison
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Mise à jour du statut de livraison</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {props.delivery_status === 'in-preparation' && 'Veuillez affecter la commande à un livreur'}

              {/* {props.delivery_status === 'in-preparation' && 
              
              <div>
                <p>The delivery guy list</p>
                <DeliveryGuyList />
              </div>
              
              } */}
              { (props.delivery_status !== 'in-preparation' && props.delivery_guy ) && <p>Mettre à jour le statut de livraison</p> }
              </Modal.Body>
              <Modal.Footer>
                {/* {props.delivery_status === 'in-preparation' && <button className="btn" onClick={submitInDeliveryHandler} > En cours de livraison </button>} */}
                {props.delivery_status === 'in-delivery' && <button className="btn" onClick={submitDeliveredHandler} > Livré </button>}
                { (props.delivery_status === 'in-delivery' ) && <button className="btn" onClick={submitReturnHandler} > Retour </button>}
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
        }
        
        </div>
            
        </Card>
        )
}

export default DeliveryStatusButtons;


