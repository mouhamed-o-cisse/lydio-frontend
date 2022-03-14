const DOMAIN = 'http://localhost:2800';

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

// get one order

export async function getSingleQuote(quote_id) {
  const response = await fetch(`${DOMAIN}/get-quote/${quote_id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch quote.');
  }

  const loadedQuote = {
    id: quote_id,
    ...data,
  };

  return loadedQuote;
}

export async function newOrder(orderData) {
  const response = await fetch(`${DOMAIN}/newquote`, {
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

export async function updateOrder(orderUpdateData) {
  // console.log(quoteUpdateData.quote_id)
  const response = await fetch(`${DOMAIN}/update/${orderUpdateData.order_id}`, {
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
  const response = await fetch(`${DOMAIN}/update/${statusUpdateData.order_id}`, {
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
