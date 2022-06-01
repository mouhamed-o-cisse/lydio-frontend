import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';



function BroughtOrders (props){
    const orders = props.orders;
    // console.log(orders)

    let deliveredOrders =  [];

    let returnedOrders =  [];

    // let eachDate = '';
    // console.log(eachDate)


    orders.forEach(order => {
      if (order.delivery_status === "delivered"){
        deliveredOrders.push(order);
      }
    });


    // const convertedDeliveryDate = new Date (orders.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'medium' })

    // orders.forEach(order => {
    //   eachDate = new Date (order.delivery_date).toLocaleString('fr-FR', { dateStyle: 'full' })
    //   console.log(eachDate)
    // });


  return (
    <Fragment>
      <h2 className='tohide'> Commandes Livrées</h2>
      {deliveredOrders.length === 0 && <p>Pas de commandes livrées</p>}
      {deliveredOrders.length > 0 && <div className='tohide'>
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
                <th>Statut</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {deliveredOrders.map((orders) => (
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
              { orders.delivery_status === 'delivered' && <th>Livré</th>}
              { orders.delivery_status === 'in-delivery' && <th>En cours de livraison</th>}
              { orders.delivery_status === 'return' && <th>Retour</th>}
              <th>
                  <Link className='btn' to={`/detail-cmd/${orders.order_id}`}>
                    Details
                  </Link>
              </th>
            </tr>
                  ))}
            </tbody>
          </Table>
      </div> }

      <h2 className='tohide'> Commandes retournées</h2>
      {returnedOrders.length === 0 && <p className='tohide'>Pas de commandes retournées</p>}
      {returnedOrders.length > 0 && <div className='tohide'>
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
                <th>Statut</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {returnedOrders.map((orders) => (
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
              { orders.delivery_status === 'delivered' && <th>Livré</th>}
              { orders.delivery_status === 'in-delivery' && <th>En cours de livraison</th>}
              { orders.delivery_status === 'return' && <th>Retour</th>}
              <th>
                  <Link className='btn' to={`/detail-cmd/${orders.order_id}`}>
                    Details
                  </Link>
              </th>
            </tr>
                  ))}
            </tbody>
          </Table>
      </div> }
    </Fragment>
  ); 
}

export default BroughtOrders;