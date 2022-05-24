// import { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import classes from './ListOfDeliveryGuysItem.module.css';
// import { Table } from 'react-bootstrap';


function ListOfDeliveryGuysItem (props){
    // console.log(props)
    return (
      <tr>
        <td>{props.delivery_guy_id}</td>
        <td>{props.names}</td>
        { props.phone_number && <td>{props.phone_number}</td>}
        { !props.phone_number && <td>Pas de numéro de téléphone</td>}
        <td>
          <Link className='btn' to={`/page-livreur/${props.delivery_guy_id}`}>
           Commandes affectées à {props.names}
          </Link> 
        </td>
      </tr>
    ) 
}

export default ListOfDeliveryGuysItem;