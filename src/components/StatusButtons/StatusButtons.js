import Card from "../UI/Card";
import classes from './StatusButtons.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRef, useState } from 'react';



function StatusButtons (props){

    const reservationDeliveryDateInputRef = useRef();
    const confirmationDeliveryDateInputRef = useRef();
    const confirmationcommentInputRef = useRef();
    const creneauInputRef = useRef();
    const personToJoinInCaseInputRef = useRef();

    function submitConfirmationHandler(event) {
        event.preventDefault();

        const enteredConfirmationComment = confirmationcommentInputRef.current.value;
        const enteredConfirmationDeliveryDate = confirmationDeliveryDateInputRef.current.value;
        const enteredCreneau = creneauInputRef.current.value;
        const enteredPersonToJoinInCase = personToJoinInCaseInputRef.current.value;
    
        const order_status = 'confirmed';
        const delivery_date = enteredConfirmationDeliveryDate;
        const comment = enteredConfirmationComment;
        const creneau = enteredCreneau;
        const person_to_join_in_case = enteredPersonToJoinInCase;
        const order_id = props.order_id

        props.onUpdateQuoteStatus({ 
            order_status: order_status, order_id : order_id, comment : comment, delivery_date : delivery_date,  
            creneau : creneau, person_to_join_in_case : person_to_join_in_case });
    }

    function submitReservationHandler(event) {
        event.preventDefault();

        const enteredReservationDeliveryDate = reservationDeliveryDateInputRef.current.value;

    
        const order_status = 'reservation';
        const delivery_date = enteredReservationDeliveryDate;
        const order_id = props.order_id

        props.onUpdateQuoteStatus({ order_status: order_status, order_id : order_id, delivery_date : delivery_date });
    }

    function submitUnreachableHandler(event) {
        event.preventDefault();

        const order_status = 'unreachable';
        const order_id = props.order_id

        props.onUpdateQuoteStatus({ order_status: order_status, order_id : order_id});
    }

    function submitCancelHandler(event) {
        event.preventDefault();

        const order_status = 'cancelled';
        const order_id = props.order_id

        props.onUpdateQuoteStatus({ order_status: order_status, order_id : order_id });
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    

    return (
        <Card>
            {/* <div className={classes.buttons}>
              <button className="btn" onClick={submitConfirmationHandler} > Confirmer </button>
              <button className="btn" onClick={submitReservationHandler} > Réservation </button>
              <button className="btn" onClick={submitUnreachableHandler} > Injoignable </button>
              <button className="btn" onClick={submitCancelHandler} > Annuler </button>
              <button className="btn"  > Supprimer </button>
            </div> */}

            <div className={classes.whole}>

        { (props.order_status === 'reservation' || props.order_status === 'unreachable' || props.order_treatment === 'not-treated' ) &&
        <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow}>
                 Confirmer
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div className="form">
                <label htmlFor='delivery_date'>Commentaire</label> <br/>
                <input type='text' id='comment' placeholder='Commentaire' ref={confirmationcommentInputRef} /> <br/>
                <label htmlFor='creneau'>Créneau</label> <br/>
                <input type='text' id='creneau' placeholder='Créneau' ref={creneauInputRef} /> <br/>
                <label htmlFor='person_to_join_in_case'>Personne a joindre au cas le client n'est pas joignable</label> <br/>
                <input type='text' id='person_to_join_in_case' placeholder='Personne à joindre' ref={personToJoinInCaseInputRef} /> <br/>
                <label htmlFor='delivery_date'>Date de livraison</label> <br/>
                <input type='date' id='delivery_date' ref={confirmationDeliveryDateInputRef} /> <br/>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitConfirmationHandler} > Enregister la confirmation </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
        }

        {  (props.order_status === 'unreachable' || props.order_treatment === 'not-treated')  &&
          <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow2}>
                Réservation
            </Button>

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Réserver</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form">
                 <label htmlFor='delivery_date'>Date de livraison</label> <br/>
                 <input type='date' id='delivery_date' ref={reservationDeliveryDateInputRef} /> <br/>
                
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitReservationHandler} > Enregistrer la réservation </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
        }

        { props.order_treatment === 'not-treated'  &&
          <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow3}>
                Injoignable
            </Button>

            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title>Injoignable</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Marquer le client comme injoignable</p>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitUnreachableHandler} > Injoignable </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
        }

         { props.delivery_status !== 'delivered'  && 
           <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow4}>
                Annuler
            </Button>

            <Modal show={show4} onHide={handleClose4}>
              <Modal.Header closeButton>
                <Modal.Title>Annuler</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Annuler la commande</p>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitCancelHandler} > Annuler </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
        }
        
        </div>
            
        </Card>
        )
}

export default StatusButtons;

// function submitHandler(event) {
//     event.preventDefault();

//     const text = 'I\'m activated';
//     const order_id = props.order_id

//     props.onUpdateQuoteStatus({ text: text, order_id : order_id });
// }