import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

function OrdersToBring (props){

  let validOrders =  [];

  // let eachDate = '';

  let date = new Date();

    const orders = props.orders; 

    orders.forEach(order => {
      if (order.delivery_status === "in-delivery"){
        validOrders.push(order);
      }
    });

    // orders.forEach(order => {
    //   eachDate = new Date (order.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full' })
    // });

  // const convertedDeliveryDate = new Date (orders.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'medium' })
  const departDate = new Date (date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'medium' })
  // console.log(departDate)

  const printStyle = {
    margin: '10px',
  };

  return (
    <Fragment>
       <h2 className='tohide'>Commande en cours de livraison</h2>
       <h2 className='todisplay'>Fiche commandes de {props.delivery_guy_name}</h2>
       <h5 className='todisplay'>Date d'impression : {departDate} </h5>
       {validOrders.length === 0 && <p>Pas de commande en cours de livraison</p>}
       {validOrders.length > 0 && <div>
      <button className='btn tohide' style={printStyle} onClick={() => window.print()}>Imprimer la fiche de livreur</button> 
          <Table responsive="sm" striped bordered hover variant="">
            <thead> 
              <tr>
                <th>Date de livaison</th>
                <th>Adresse</th>
                <th>Prénom et Nom</th>
                <th>Numéro de téléphone</th>
                <th>Quantité</th>
                <th>Marque / Model</th>
                <th>Montant </th>
                <th>Numero commande</th>
                <th>Commentaire</th>
                <th className='tohide'>Statut</th>
                <th className='tohide'>Details</th>
              </tr>
            </thead>
            <tbody >
            {validOrders.map((orders) => ( 
                <tr key={orders.order_id}>
                <th>{new Date (orders.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full' })}</th>
                <th>{orders.delivery_address}</th>
                <th>{orders.names}</th>
                <th>{orders.client_phone_number}</th>
                <th>{orders.quantity}</th>
                <th>{orders.watch_brand_and_model}</th>
                <th>{+orders.watch_price + +orders.delivery_price}</th>
                <th>{orders.invoice_id}</th>
                <th>{orders.comment}</th>
                { orders.delivery_status === 'delivered' && <th className='tohide'>Livré</th>}
                { orders.delivery_status === 'in-delivery' && <th className='tohide'>En cours de livraison</th>}
                { orders.delivery_status === 'return' && <th className='tohide'>Retour</th>}
                <th className='tohide'>
                    <Link className='btn' to={`/detail-cmd/${orders.order_id}`}>
                      Details
                    </Link>
                </th>
              </tr>
            ))}
             </tbody>
          </Table>
        </div>  }         

    </Fragment>
  ); 
}

export default OrdersToBring;