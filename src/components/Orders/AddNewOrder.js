import Card from "../UI/Card";
import { useRef, useState } from 'react';
// import { Prompt } from 'react-router-dom';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './AddNewOrder.module.css';

function AddNewOrder (props){
    const [isEntering, setIsEntering] = useState(false);

    const shopifyIdInputRef = useRef();
    const namesInputRef = useRef();
    const orderDateInputRef = useRef();
    const phoneNumberInputRef = useRef();
    const deliveryAddressInputRef = useRef();
    const quantityInputRef = useRef();
    const watchBrandAndModelInputRef = useRef();
    const watchPriceInputRef = useRef();
    const deliveryPriceInputRef = useRef();
    const commentInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredShopifyId = shopifyIdInputRef.current.value;
    const enteredNames = namesInputRef.current.value;
    const enteredOrderDate = orderDateInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredDeliveryAddress = deliveryAddressInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredWatchBrandAndModel = watchBrandAndModelInputRef.current.value;
    const enteredWatchPrice = watchPriceInputRef.current.value;
    const enteredDeliveryPrice = deliveryPriceInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

    // optional: Could validate here

    props.onNewOrder({ 
      shopify_order_id: enteredShopifyId, 
      names: enteredNames, 
      order_date: enteredOrderDate, 
      client_phone_number: enteredPhoneNumber, 
      delivery_address: enteredDeliveryAddress, 
      quantity: enteredQuantity, 
      watch_brand_and_model: enteredWatchBrandAndModel, 
      watch_price: enteredWatchPrice, 
      delivery_price: enteredDeliveryPrice, 
      comment: enteredComment, 
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
              <LoadingSpinner />
              {/* <p>is Loading...</p> */}
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='shopify_order_id'>ID Shopify</label>
            <input type='text' id='shopify_order_id' placeholder='#0000' ref={shopifyIdInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='order_date'>Date la commande</label>
            <input type='date' id='order_date' placeholder='' ref={orderDateInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='names'>Prénom et nom</label>
            <input type='text' id='names' placeholder='' ref={namesInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='client_phone_number'>Numéro de téléphone</label>
            <input type='text' id='client_phone_number' placeholder='' ref={phoneNumberInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='delivery_address'>Adresse de livraison</label>
            <input type='text' id='delivery_address' placeholder='' ref={deliveryAddressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='quantity'>Quantité</label>
            <input type='number' id='quantity' defaultValue='1' placeholder='' ref={quantityInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_brand_and_model'>Marque et modèle</label>
            <input type='text' id='watch_brand_and_model' placeholder='' ref={watchBrandAndModelInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='watch_price'>Prix de la montre</label>
            <input type='text' id='watch_price' placeholder='' ref={watchPriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='delivery_price'>Prix de la livraison</label>
            <input type='text' id='delivery_price' placeholder='' ref={deliveryPriceInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='comment'>Commentaire</label>
            <input type='text' id='comment' placeholder='' ref={commentInputRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>Enregistrer</button>
          </div>
        </form>

        </Card>
    )
}

export default AddNewOrder;