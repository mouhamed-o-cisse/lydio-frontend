// const DOMAIN = 'http://localhost:2800';
const DOMAIN = 'https://lydio-backend-app.herokuapp.com';

// get not treated orders orders/get-untreated 

export async function getNotTreatedOrders() {
  const response = await fetch(`${DOMAIN}/orders/get-untreated`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const NotTreatedOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    NotTreatedOrders.push(quoteObj);
  }
  // console.log(NotTreatedOrders)

  return NotTreatedOrders;
}

// get confirmed orders orders/get-confirmed-orders

export async function getConfirmedOrders() {
  const response = await fetch(`${DOMAIN}/orders/get-confirmed-orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const ConfirmedOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    ConfirmedOrders.push(quoteObj);
    
  }

  return ConfirmedOrders;
}

// get reservation orders orders/get-reservations

export async function getReservations() {
  const response = await fetch(`${DOMAIN}/orders/get-reservations`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const Reservations = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    Reservations.push(quoteObj);
    
  }

  return Reservations;
}


// get unreachable clients order orders/get-unavailable-clients

export async function getUnavailableClients() {
  const response = await fetch(`${DOMAIN}/orders/get-unavailable-clients`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const UnavailableClients = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    UnavailableClients.push(quoteObj);
    
  }

  return UnavailableClients;
}

// get cancelled orders order orders/get-cancelled-orders

export async function getCancelledOrders() {
  const response = await fetch(`${DOMAIN}/orders/get-cancelled-orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const CancelledOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    CancelledOrders.push(quoteObj);
    
  }

  return CancelledOrders;
}

// get returned orders order orders/get-returned-orders

export async function getReturnedOrder() {
  const response = await fetch(`${DOMAIN}/orders/get-returned-orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const ReturnedOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    ReturnedOrders.push(quoteObj);
    
  }

  return ReturnedOrders;
}

// get in delivery orders 

export async function getInDeliveryOrders() {
  const response = await fetch(`${DOMAIN}/orders/get-indelivery-orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const InDeliveryOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    InDeliveryOrders.push(quoteObj);
    
  }

  return InDeliveryOrders;
}

// get delivered orders 

export async function getDeliveredOrders() {
  const response = await fetch(`${DOMAIN}/orders/get-delivered-orders`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const DeliveredOrders = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    DeliveredOrders.push(quoteObj);
    
  }

  return DeliveredOrders;
}

// get one order

export async function getSingleOrder(order_id) {
  const response = await fetch(`${DOMAIN}/orders/get-one/${order_id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: order_id,
    ...data,
  };

  return loadedQuote;
}

// get exchanges

export async function getExchanges() {
  const response = await fetch(`${DOMAIN}/exchanges/get-all-exchanges`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quotes.');
  }

  const Exchanges = [];

  for (const key in data) {
    const quoteObj = {
      id: key,
      ...data[key],
    };

    Exchanges.push(quoteObj);
  }
  // console.log(NotTreatedOrders)

  return Exchanges;
}

// get one exchange

export async function getSingleExchange(exchage_id) {
  const response = await fetch(`${DOMAIN}/exchanges/get-one/${exchage_id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedExchange = {
    id: exchage_id,
    ...data,
  };

  return loadedExchange;
}

export async function newOrder(orderData) {
  // console.log(orderData)
  const response = await fetch(`${DOMAIN}/orders/neworder`, {
    method: 'POST',
    body: JSON.stringify(orderData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

// add new exchange

export async function newExchange(exchangeData) {
  // console.log(orderData)
  const response = await fetch(`${DOMAIN}/exchanges/newexchange`, {
    method: 'POST',
    body: JSON.stringify(exchangeData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function updateOrder(orderUpdateData) {
  // console.log(quoteUpdateData.quote_id)
  const response = await fetch(`${DOMAIN}/orders/update-order/${orderUpdateData.order_id}`, {
    method: 'PUT',
    body: JSON.stringify(orderUpdateData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function updateStatus(statusUpdateData) {
  // console.log(quoteUpdateData.quote_id)
  const response = await fetch(`${DOMAIN}/orders/update-order_status/${statusUpdateData.order_id}`, {
    method: 'PUT',
    body: JSON.stringify(statusUpdateData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function updateDeliveryStatus(statusUpdateData) {
  // console.log(quoteUpdateData.quote_id)
  const response = await fetch(`${DOMAIN}/orders/update-delivery_status/${statusUpdateData.order_id}`, {
    method: 'PUT',
    body: JSON.stringify(statusUpdateData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}

export async function updateExchangeStatus(exchangeStatusUpdateData) {
  // console.log(quoteUpdateData.quote_id)
  const response = await fetch(`${DOMAIN}/exchanges/update-delivery_status/${exchangeStatusUpdateData.exchange_id}`, {
    method: 'PUT',
    body: JSON.stringify(exchangeStatusUpdateData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create quote.');
  }

  return null;
}