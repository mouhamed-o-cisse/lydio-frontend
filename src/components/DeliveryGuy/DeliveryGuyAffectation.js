import { Fragment } from "react";

function DeliveryGuyAffectation (props){

    function submitInDeliveryGuyHandler(event) {
        event.preventDefault();

        const delivery_guy_id = props.delivery_guy_id;
        const order_id = props.order_id

        props.onSetDeliveryGuy({ delivery_guy_id: delivery_guy_id, order_id : order_id});
    }

    const printStyle = {
        margin: '5px',
      };

    return (    
        <Fragment>
            <div>
              <button className="btn" style={printStyle}  onClick={submitInDeliveryGuyHandler} >Affecter à {props.names} </button>
            </div>
            {/* <button>Affecter à {props.delivery_guy_id} </button>   */}
        </Fragment>
                           
    )  
}

export default DeliveryGuyAffectation;