import { Fragment } from 'react';
import OrderItem from './OrderItem';
// import classes from './NotTreatedOrdersComponent.module.css';
import { Table } from 'react-bootstrap';

function NotTreatedOrdersComponent (props){

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
                <th>date d'enregistrement</th>
                <th>date de la commande </th>
                {/* <th> statut liv</th> */}
                {/* <th>comment</th> */}
                {/* <th>Details</th> */}
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((orders) => (
                    <OrderItem
                      key={orders.order_id}
                      order_id={orders.order_id}
                      order_date={orders.order_date}
                      names={orders.names}
                      client_phone_number={orders.client_phone_number}
                      delivery_address={orders.delivery_address}
                      registration_date={orders.registration_date}
                      shopify_order_id={orders.shopify_order_id}
                      // delivery_status={orders.delivery_status}
                      // comment={orders.comment}
                      // creneau={orders.creneau}
                      // delivery_status_last_update={orders.delivery_status_last_update}
                    />
                  ))}
            </tbody>
          </Table>
        </div>
      </Fragment>
    )
}

export default NotTreatedOrdersComponent;