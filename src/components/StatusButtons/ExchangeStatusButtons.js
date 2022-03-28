import Card from "../UI/Card";
import classes from './StatusButtons.module.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



function ExchangeStatusButtons (props){

    // const reservationDeliveryDateInputRef = useRef();
    // const confirmationDeliveryDateInputRef = useRef();
    // const confirmationcommentInputRef = useRef();
    // const creneauInputRef = useRef();
    // const personToJoinInCaseInputRef = useRef();

    // function submitConfirmationHandler(event) {
    //     event.preventDefault();

    //     const enteredConfirmationComment = confirmationcommentInputRef.current.value;
    //     const enteredConfirmationDeliveryDate = confirmationDeliveryDateInputRef.current.value;
    //     const enteredCreneau = creneauInputRef.current.value;
    //     const enteredPersonToJoinInCase = personToJoinInCaseInputRef.current.value;
    
    //     const delivery_status = 'confirmed';
    //     const delivery_date = enteredConfirmationDeliveryDate;
    //     const comment = enteredConfirmationComment;
    //     const creneau = enteredCreneau;
    //     const person_to_join_in_case = enteredPersonToJoinInCase;
    //     const exchange_id = props.exchange_id

    //     props.onUpdateExchangeStatus({ 
    //         delivery_status: delivery_status, exchange_id : exchange_id, comment : comment, delivery_date : delivery_date,  
    //         creneau : creneau, person_to_join_in_case : person_to_join_in_case });
    // }

    // function submitReservationHandler(event) {
    //     event.preventDefault();

    //     const enteredReservationDeliveryDate = reservationDeliveryDateInputRef.current.value;

    
    //     const delivery_status = 'reservation';
    //     const delivery_date = enteredReservationDeliveryDate;
    //     const exchange_id = props.exchange_id

    //     props.onUpdateExchangeStatus({ delivery_status: delivery_status, exchange_id : exchange_id, delivery_date : delivery_date });
    // }

    function submitInDeliveryHandler(event) {
        event.preventDefault();

        const delivery_status = 'in-delivery';
        const exchange_id = props.exchange_id

        props.onUpdateExchangeStatus({ delivery_status: delivery_status, exchange_id : exchange_id});
    }

    function submitDeliveredHandler(event) {
        event.preventDefault();

        const delivery_status = 'delivered';
        const exchange_id = props.exchange_id

        props.onUpdateExchangeStatus({ delivery_status: delivery_status, exchange_id : exchange_id });
    }

    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // const [show2, setShow2] = useState(false);
    // const handleClose2 = () => setShow2(false);
    // const handleShow2 = () => setShow2(true);

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
              <button className="btn" onClick={submitInDeliveryHandler} > Injoignable </button>
              <button className="btn" onClick={submitDeliveredHandler} > Annuler </button>
              <button className="btn"  > Supprimer </button>
            </div> */}

        {/* <>
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
                <label htmlFor='person_to_join_in_case'>Personne a joindre au cas le client n'est joignable</label> <br/>
                <input type='text' id='person_to_join_in_case' placeholder='Personne à joindre' ref={personToJoinInCaseInputRef} /> <br/>
                <label htmlFor='delivery_date'>Date de livraison</label> <br/>
                <input type='date' id='delivery_date' ref={confirmationDeliveryDateInputRef} /> <br/>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitConfirmationHandler} > Enregister la confirmation </button>
             </Modal.Footer>
            </Modal>
        </> */}

        {/* <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow2}>
                Réservation
            </Button>

            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Réservation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="form">
                 <label htmlFor='delivery_date'>Date de livraison</label> <br/>
                 <input type='date' id='delivery_date' ref={reservationDeliveryDateInputRef} /> <br/>
                
                </div>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitReservationHandler} > Enregistrer la réservation </button>
             </Modal.Footer>
            </Modal>
        </> */}

        <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow3}>
                Marquer en cours de livraison
            </Button>

            <Modal show={show3} onHide={handleClose3}>
              <Modal.Header closeButton>
                <Modal.Title>Marquer en cours de livraison</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Marquer en cours de livraison</p>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitInDeliveryHandler} > Marquer en cours de livraison </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>

        <>
            <Button variant="primary" className={classes.buttons} onClick={handleShow4}>
                Marquer livré
            </Button>

            <Modal show={show4} onHide={handleClose4}>
              <Modal.Header closeButton>
                <Modal.Title>Marquer livré</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Marquer livré l'echange</p>
              </Modal.Body>
              <Modal.Footer>
                <button className="btn" onClick={submitDeliveredHandler} > Marquer livré </button>
                {/* <Button variant="secondary">Fermer</Button> */}
             </Modal.Footer>
            </Modal>
        </>
            
        </Card>
        )
}

export default ExchangeStatusButtons;
