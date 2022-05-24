import { Fragment } from 'react';
// import classes from './ConfirmedOrdersComponent.module.css';
import ListOfDeliveryGuysItem from './ListOfDeliveryGuysItem';
import { Table } from 'react-bootstrap';

function ListOfDeliveryGuysComponent (props){
    const delivery_guys = props.orders;

    return (
        <Fragment>
        <Table striped="columns">
          <thead>
            <tr>
              <th>ID </th>
              <th>Prénom et Nom</th>
              <th>Numéro de téléphone</th>
              <th>Lien</th>
            </tr>
          </thead>
          <tbody>
          {delivery_guys.map((delivery_guy) => (
                <ListOfDeliveryGuysItem 
                  key={delivery_guy.delivery_guy_id} 
                  delivery_guy_id={delivery_guy.delivery_guy_id}
                  phone_number = {delivery_guy.phone_number}
                  names={delivery_guy.names} 
                />
          ))}    
          </tbody>
        </Table>
      </Fragment>
    ) 
}

export default ListOfDeliveryGuysComponent;