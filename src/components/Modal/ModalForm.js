import Card from "../UI/Card";
import { useRef, useState } from 'react';
// import { Prompt } from 'react-router-dom';

// import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './ModalForm.module.css';

function ModalForm (props){

    const [isEntering, setIsEntering] = useState(false);

    const namesInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const deliveryAddressInputRef = useRef();
    const watchBrandAndModelInputRef = useRef();
    const watchPriceInputRef = useRef();
    const deliveryPriceInputRef = useRef();
    const commentInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredNames = namesInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredDeliveryAddress = deliveryAddressInputRef.current.value;
    const enteredWatchBrandAndModel = watchBrandAndModelInputRef.current.value;
    const enteredWatchPrice = watchPriceInputRef.current.value;
    const enteredDeliveryPrice = deliveryPriceInputRef.current.value;
    const enteredComment = commentInputRef.current.value;
    const order_id = props.order_id;

    // optional: Could validate here

    props.onUpdateOrder({ 
      names: enteredNames, 
      client_phone_number: enteredPhoneNumber, 
      delivery_address: enteredDeliveryAddress, 
      watch_brand_and_model: enteredWatchBrandAndModel, 
      watch_price: enteredWatchPrice, 
      delivery_price: enteredDeliveryPrice, 
      comment: enteredComment, 
      order_id : order_id });

  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

    return (
        <Card>
            <p> {props.previousText} </p>
            <p> {props.previousAuthor} </p>

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
            <input type='text' id='names' defaultValue={props.previousNames} placeholder={props.previousNames} ref={namesInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='client_phone_number'>Numéro de téléphone</label>
            <input type='text' id='client_phone_number' defaultValue={props.previousClientPhoneNumber} placeholder='' ref={phoneNumberInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='delivery_address'>Adresse de livraison</label>
            <input type='text' id='delivery_address' defaultValue={props.previousDeliveryAddress} placeholder='' ref={deliveryAddressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_brand_and_model'>Marque et modèle</label>
            <input type='text' id='watch_brand_and_model' defaultValue={props.previousWatchBrandAndModel} placeholder='' ref={watchBrandAndModelInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_price'>Prix de la montre</label>
            <input type='text' id='watch_price' defaultValue={props.previousWatchPrice} placeholder='' ref={watchPriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='delivery_price'>Prix de la livraison</label>
            <input type='number' id='delivery_price' defaultValue={props.previousDeliveryPrice} placeholder='' ref={deliveryPriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='comment'>Commentaire</label>
            <input type='text' id='comment' defaultValue={props.previousComment} placeholder='' ref={commentInputRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Mettre à jour</button>
          </div>
        </form>

        </Card>
    )
}

export default ModalForm;