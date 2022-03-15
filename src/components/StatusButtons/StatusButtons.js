import Card from "../UI/Card";

function StatusButtons (props){

    function submitHandler(event) {
        event.preventDefault();
    
        const text = 'I\'m activated';
        const order_id = props.order_id

        props.onUpdateQuoteStatus({ text: text, order_id : order_id });
      }

    return (
        <Card>
            <button className="btn" onClick={submitHandler} > Activate </button>
        </Card>
        )
}

export default StatusButtons;