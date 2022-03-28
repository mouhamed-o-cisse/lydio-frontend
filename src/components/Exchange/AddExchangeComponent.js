import Card from "../UI/Card";
import { useRef, useState } from 'react';
// import { Prompt } from 'react-router-dom';

// import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './AddExchangeComponent.module.css';


function AddExchangeComponent (props) {
    const [isEntering, setIsEntering] = useState(false);

    const namesInputRef = useRef();
    const watchToExchangeInputRef = useRef();
    const watchExchangePriceInputRef = useRef();
    const replacedWatchInputRef = useRef();
    const replacedWatchPriceInputRef = useRef();
    const clientPhoneNumberInputRef = useRef();
    const commentInputRef = useRef();
    const deliveryAddressInputRef = useRef();
    const exchangeDateInputRef = useRef();
    // const shopifyIdInputRef = useRef();
    // const shopifyIdInputRef = useRef();
    

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredNames = namesInputRef.current.value;
    const enteredWatchToExchange = watchToExchangeInputRef.current.value;
    const enteredWatchExchangePrice = watchExchangePriceInputRef.current.value;
    const enteredReplacedWatch = replacedWatchInputRef.current.value;
    const enteredReplacedWatchPrice = replacedWatchPriceInputRef.current.value;
    const enteredClientPhoneNumber = clientPhoneNumberInputRef.current.value;
    const enteredDeliveryAddress = deliveryAddressInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
    const enteredExchangeDate = exchangeDateInputRef.current.value;

    // optional: Could validate here

    props.onNewExchange({ 
      names: enteredNames, 
      watch_to_exchange: enteredWatchToExchange, 
      watch_to_exchange_price: enteredWatchExchangePrice, 
      replaced_watch: enteredReplacedWatch, 
      replaced_watch_price: enteredReplacedWatchPrice, 
      client_phone_number: enteredClientPhoneNumber, 
      delivery_address: enteredDeliveryAddress, 
      comment: enteredComment, 
      exchange_date: enteredExchangeDate, 

      });
    }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

    return (
        <Card>
            <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              {/* <LoadingSpinner /> */}
              <p>is Loading...</p>
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='names'>Prénom et nom</label>
            <input type='text' id='names' placeholder='' ref={namesInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_to_exchange'>Montre à changer</label>
            <input type='text' id='watch_to_exchange' placeholder='' ref={watchToExchangeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_to_exchange_price'>Prix de la montre à changer</label>
            <input type='number' id='watch_to_exchange_price' placeholder='' ref={watchExchangePriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='replaced_watch'>Montre de rechange</label>
            <input type='text' id='replaced_watch' placeholder='' ref={replacedWatchInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='replaced_watch_price'>Prix de la montre de rechange</label>
            <input type='number' id='replaced_watch_price' placeholder='' ref={replacedWatchPriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='client_phone_number'>Numéro de téléphone</label>
            <input type='tel' id='client_phone_number' placeholder='' ref={clientPhoneNumberInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='delivery_address'>Adresse de livraison</label>
            <input type='text' id='delivery_address' placeholder='' ref={deliveryAddressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='comment'>Commentaire</label>
            <input type='text' id='comment' placeholder='' ref={commentInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='exchange_date'>Date de l'échange</label>
            <input type='date' id='exchange_date' placeholder='' ref={exchangeDateInputRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Enregistrer</button>
          </div>
        </form>

        </Card>
    )}

export default AddExchangeComponent;