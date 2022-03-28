// import { Link, useParams } from 'react-router-dom';
import classes from './HighlightedOrder.module.css';
import { useState } from 'react';
import ModalForm from '../Modal/ModalForm';
// import ModalInformation from '../Modal/ModalInformation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import useHttp2 from '../../hooks/use-http2';
import { updateOrder, updateDeliveryStatus } from '../../lib/api';
// import LoadingSpinner from '../UI/LoadingSpinner';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import logo from '../../assets/img/logo.jpg'
import DeliveryStatusButtons from '../StatusButtons/DeliveryStatusButtons';

const HighlightedOrder = (props) => {

  const { sendRequest, status, error } = useHttp(updateOrder);

  const { sendRequest2, status2, error2 } = useHttp2(updateDeliveryStatus);

  const navigate = useNavigate();

  const updateOrderHandler = (orderUpdateData) => {
    sendRequest(orderUpdateData);
    };

  useEffect(() => {
    if (status === 'completed-error') {
      // navigate('/quotes');
      console.log('finished but an error occured')
    }
    if (status === 'completed-successfully') {
      // navigate('/');
      // console.log('finished and succefull')
      refreshPage()
    }
    if (error) {
      console.log(error)
      return <p className='centered'>{error}</p>;
    }
  }, [status, navigate, error]);

  const updateDeliveryStatusHandler = (DeliveryStatusUpdateData) => {
    sendRequest2(DeliveryStatusUpdateData);
    };
  
    // if (status2 === 'pending'){
    //    // navigate('/quotes');
    //    console.log('pending...')
    // }

    useEffect(() => {

    if (status2 === 'completed-error'){
      console.log('error', error2)
    }
  
    if (status2 === 'completed-successfully') {
      navigate(-1);
      // refreshPage();
      console.log('finished and succefull')
    }
  }, [status2, navigate, error2]);
  
  // useEffect(()=>{
  // function print(){ window.print(false);}
    
  // }, [])
     function refreshPage() {
    window.location.reload(false);
  }
    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const imgStyle = {
    width: '200px',
  };

  const centerStyle = {
    textAlign: 'center',
  };

  const printStyle = {
    margin: '10px',
  };

  
  // const frenchDate = props.order_date
  // const real = frenchDate.getTime();
//  console.log(real)

//    var date1 = Date.parse(props.order_date.toString());

//    console.log(date1)

//     console.log(props.order_date.toString());


//   const date = new Date('2019-04-16T13:00:00+02:00');
// console.log(
// date.toLocaleString('fr-FR', { month: 'long', day: 'numeric' })
// );

  return (
    <div>
    <figure className={classes.quote}>
    { ( (props.order_status === 'confirmed' && props.delivery_status === 'in-preparation' ) && 
      <button className='btn' style={printStyle} onClick={() => window.print()}>Imprimer</button> 
      )}
      {/* {frenchDate} <br/> */}
      {/* {props.order_date} */}
        <Table striped bordered hover>
        <tbody>
          <tr>
            <td colSpan={2} className={classes.first}>Shopify ID</td>
            { props.shopify_order_id && <td colSpan={2}>{props.shopify_order_id}</td>}
            { !props.shopify_order_id && <td colSpan={2}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={2} className={classes.first}>Numéro Facture</td>
            { props.invoice_id && <td colSpan={2}>{props.invoice_id}</td> }
            { !props.invoice_id && <td colSpan={2}>information pas disponible</td> }
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Prénom de nom </td>
            { props.names &&  <td colSpan={3}>{props.names}</td>}
            { !props.names &&  <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Numéro de téléphone </td>
            { props.client_phone_number &&  <td colSpan={3}>{props.client_phone_number}</td> }
            { !props.client_phone_number &&  <td colSpan={3}>information pas disponible</td> }
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Adresse de livraison </td>
            { props.delivery_address &&  <td colSpan={3}>{props.delivery_address}</td>}
            { !props.delivery_address &&  <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Quantité </td>
            { props.quantity && <td colSpan={3}>{props.quantity}</td> }
            { !props.quantity && <td colSpan={3}>information pas disponible</td> }
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Commande </td>
            { props.watch_brand_and_model && <td colSpan={3}>{props.watch_brand_and_model}</td>}
            { !props.watch_brand_and_model && <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Prix produit </td>
            { props.watch_price && <td colSpan={3}>{props.watch_price}</td>}
            { !props.watch_price && <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Prix de la livraison </td>
            { props.delivery_price && <td colSpan={3}>{props.delivery_price}</td>}
            { !props.delivery_price && <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Total </td>
            { (props.delivery_price && props.watch_price) && <td colSpan={3}>{+props.delivery_price + +props.watch_price}</td>}
            { (!props.delivery_price || !props.watch_price) && <td colSpan={3}>information pas disponible</td>}
          </tr>
          {/* Créneau */}
          { props.order_status === 'confirmed' && <tr>
            <td colSpan={1} className={classes.first}>Créneau </td>
            { props.creneau && <td colSpan={3}>{props.creneau}</td>}
            { !props.creneau && <td colSpan={3}>information pas disponible</td>}
          </tr> }
          {/* Coomment */}
          { props.order_status === 'confirmed' && <tr>
            <td colSpan={1} className={classes.first}>Commentaire </td>
            { props.comment && <td colSpan={3}>{props.comment}</td>}
            { !props.comment && <td colSpan={3}>information pas disponible</td>}
          </tr>}
          <tr>
            <td colSpan={1} className={classes.first}> Date commande </td>
            { props.order_date && <td colSpan={3}>{props.order_date}</td>}
            { !props.order_date && <td colSpan={3}>information pas disponible</td>}
          </tr>
          <tr>
            <td colSpan={1} className={classes.first}>Date d'enregistrement </td>
            { props.registration_date && <td colSpan={3}>{props.registration_date}</td>}
            { !props.registration_date && <td colSpan={3}>information pas disponible</td>}
          </tr>
          {/* Date livraison */}
          { (props.order_status === 'confirmed' || props.order_status === 'reservation') && <tr>
            <td colSpan={1} className={classes.first}>Date de livraison </td>
            { props.delivery_date && <td colSpan={3}>{props.delivery_date}</td>}
            { !props.delivery_date && <td colSpan={3}>information pas disponible</td>}
          </tr> } 
          {/* Order Status Confirmed */}
          { (props.order_status === 'confirmed' || props.order_status === 'reservation' || props.order_status === 'unreachable' ) && <tr> 
            <td colSpan={1} className={classes.first}>Statut de la commande </td>
            { props.order_status && 
              <td colSpan={3}>
                { props.order_status === 'confirmed' &&   'Confirmé' } 
                { props.order_status === 'reservation' &&   'Réservation'} 
                { props.order_status === 'unreachable' &&   'Injoignable' } 
              <br/> 
              { props.order_status_last_update && <span>Dernière modification : {props.order_status_last_update} </span>}
              { !props.order_status_last_update && <span>Dernière modification : information pas disponible </span>}
            </td>}
            { !props.order_status && <td colSpan={3}>{props.order_status} <br/> 
                <span>information pas disponible </span>
            </td>}
          </tr> }
          {/* <tr>
            <td colSpan={1} className={classes.first}>Traitement de la commande </td>
            <td colSpan={3}>{props.order_treatment}</td>
          </tr> */}
          { props.order_status === 'confirmed' && <tr>
            <td colSpan={1} className={classes.first}>Statut de la livraison </td>
            { props.delivery_status && <td colSpan={3}>
              { props.delivery_status === 'in-preparation' && 'En cours de préparation'} 
              { props.delivery_status === 'in-delivery' && 'En cours de livraison'} 
              { props.delivery_status === 'delivered' && 'Livré'} 
              <br/>
             { props.delivery_status_last_update && <span>Dernière modification : {props.delivery_status_last_update} </span>}
             { !props.delivery_status_last_update && <span>Dernière modification : information pas disponible </span>}
            </td>}
            { !props.delivery_status && <td colSpan={3}>{props.delivery_status} <br/>
              <span>information pas disponible </span>
            </td>}
          </tr> }
          { props.order_status === 'confirmed' && <tr>
            <td colSpan={1} className={classes.first}>Personne a contacter au cas ou </td>
            { props.person_to_join_in_case &&  <td colSpan={3}>{props.person_to_join_in_case}</td>}
            { !props.person_to_join_in_case &&  <td colSpan={3}>information pas disponible</td>}
          </tr> }
          { props.order_status === 'confirmed' && <tr>
            <td colSpan={1} className={classes.first}>Avis client </td>
            { props.client_review && <td colSpan={3}>{props.client_review}</td>}
            { !props.client_review && <td colSpan={3}>information pas disponible</td>}
          </tr> }
          <tr>
            <td>...</td>
            <td>OSIRIS</td>
            <td>LYDIO</td>
            <td>GROUPE</td>
          </tr>
        </tbody>
      </Table>

      {/* {error && <p>there is  an error</p>} */}

      

    { ( props.delivery_status !== 'delivered' && props.delivery_status !== 'in-delivery' )  &&
     
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
    }
      
    </figure>

    {props.order_status === 'confirmed' && <DeliveryStatusButtons 
    order_id={props.order_id} 
    order_status={props.order_status} 
    delivery_status={props.delivery_status} 
    onUpdateOrderDeliveryStatus={updateDeliveryStatusHandler}
    /> }

 

{/* // <!-- ---------------------------------------------------------------------------------- INVOICE --------------------------------------------------------------------------------------------------- --> */}

  <div className={classes.invoice} >
  <div className="invoice">
 <div className="invoice-header">
  {/* <img src={logo} style={imgStyle} className="invoice-img" /> */}
 </div>
 <div className="invoice-body">
  {/* <p>Numéro facture : {props.invoice_id}</p> */}
 </div>
 <div className="invoice-footer">
  {/* <p>Numéro commande : {props.shopify_order_id}</p> */}
 </div>

 <div className="container">
   <div className="row">
     <div className="span4">
        {/* <img src={logo} className="invoice-img" /> */}
        <img src={logo} style={imgStyle} alt='logo' className="invoice-img" />
        <p className={classes.invoiceheader}>Numéro facture : {props.invoice_id}</p>
        <p className={classes.invoiceheader}>Numéro commande : {props.shopify_order_id}</p>
       <address>
           <strong>Osiris Watches</strong><br/>
          Dakar, Sénégal
       </address>
     </div>
     <div className="span4 well">
       <table className="invoice-head">
         <tbody>

           <tr>
             <td className="pull-right"><strong>Prénom et Nom : </strong></td>
             <td> {props.names}</td>
           </tr>
           <tr>
             <td className="pull-right"><strong>Numéro de téléphone : </strong></td>
             <td>{props.client_phone_number}</td>
           </tr>
           <tr>
             <td className="pull-right"><strong>Adresse de livraison : </strong></td>
             <td>{props.delivery_address}</td>
           </tr>
           <tr>
             <td className="pull-right"><strong>Date Commande : </strong></td>
             <td>{props.order_date}</td>
           </tr>
           <tr>
             <td className="pull-right"><strong>Date Livraison : </strong></td>
             <td>{props.delivery_date}</td>
           </tr>
           <tr>
             <td className="pull-right"><strong>A joindre si le  <br/>client est injoignable : </strong></td>
             {props.person_to_join_in_case &&<td>{props.person_to_join_in_case}</td> }
             {!props.person_to_join_in_case &&<td>néant</td> }
           </tr>

         </tbody>
       </table>
     </div>
   </div>
   <div className="row">
     <div className="span8">
       <h2 style={centerStyle}>Facture </h2>
       {/* <h2 style="text-align: center;">Facture Payé </h2> */}
     </div>
   </div>
   <div className="row">
     <div className="span8 well invoice-body">
       <table className="table table-bordered">
       <thead>
         <tr>
           <th>Quantité</th>
           <th>Désignation</th>
           <th>Prix produit</th>
           <th>Prix livraison</th>
           <th>Total : </th>
         </tr>
       </thead>
       <tbody>
       <tr>
         <td > {props.quantity} </td>
         <td > {props.watch_brand_and_model} </td>
         <td>{props.watch_price}</td>     
         <td> {props.delivery_price} </td>
         <td> { +props.watch_price + +props.delivery_price} </td>
       </tr>
       
       </tbody>
     </table>
     </div>
   </div>
   <div className="row">
     <div className="span8 well invoice-thank">
       <h5 style={centerStyle}>Merci pour la confiance!</h5>
       <h5 style={centerStyle}>OSIRIS vous assure une garantie d’un an pour votre (vos) montre(s) pour tout défaut de fabrication.</h5>
     </div>
   </div>
   <div className="row">
       <div className="span3">
           <strong>Service Client:</strong> +221 76 499 53 53
       </div>
       <div className="span3">
           <strong>Email:</strong> contact.osiriswatches@gmail.com
       </div>
       <div className="span3">
           <strong>Website:</strong> www.osiriswatchs.com
       </div>
   </div>
 </div>

</div>
  </div>
</div>
  );
};

export default HighlightedOrder;
