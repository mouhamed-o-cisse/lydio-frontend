import { Fragment } from 'react';
import OrderItemAll from './OrderItemAll';
// import classes from './ConfirmedOrdersComponent.module.css';
import { Table } from 'react-bootstrap';


function AllOrdersComponent (props){
    const orders = props.orders;

    return (
        <Fragment>
        <div>
          <Table responsive="sm" striped bordered hover variant="">
            <thead>
              <tr>
                <th>Id Shopify</th>
                <th>Prénom et nom</th>
                <th>Numéro de téléphone</th>
                <th>Adresse de livraison</th>
                {/* <th>Date d'enregistrement</th>
                <th>Date de la commande</th>
                <th>Date de livraison</th> */}
                <th>Statut de la commande </th>
                <th>Statut de livraison</th>
                <th>Livreur</th>

                {/* <th>Commentaire</th> */}
                 
                {/* <th>Créneau</th> */}
                {/* <th>Dernière maj du statut de la commande</th> */}
                <th>Details</th>
                {/* <th>Affecter un livreur</th> */}
              </tr>
            </thead>
            <tbody>
              {orders.map((orders) => (
                    <OrderItemAll
                      key={orders.order_id}
                      order_id={orders.order_id}
                      order_date={orders.order_date}
                      names={orders.names}
                      order_treatment = {props.order_treatment}
                      client_phone_number={orders.client_phone_number}
                      delivery_address={orders.delivery_address}
                      delivery_status = {orders.delivery_status}
                      registration_date={orders.registration_date}
                      shopify_order_id={orders.shopify_order_id}
                      delivery_guy={orders.delivery_guy}
                      delivery_date={orders.delivery_date}
                      order_status={orders.order_status}
                      comment={orders.comment}
                      creneau={orders.creneau}
                      order_status_last_update={orders.order_status_last_update}
                    />
                  ))}
            </tbody>
          </Table>
        </div>
      </Fragment>
    ) 
}

export default AllOrdersComponent;