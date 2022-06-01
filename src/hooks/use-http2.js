import { useReducer, useCallback } from 'react';

function httpReducer(state, action) {
  if (action.type === 'SEND') {
    return {
      data: null,
      error2: null,
      status2: 'pending',
    };
  }

  if (action.type === 'SUCCESS') {
    return {
      data: action.responseData,
      error2: null,
      status2: 'completed-successfully',
    };
  }

  if (action.type === 'ERROR') {
    return {
      data: null,
      error2: action.errorMessage,
      status2: 'completed-error',
    };
  }

  return state;
}

function useHttp2(requestFunction, startWithPending = false) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error2: null,
  });

  const sendRequest2 = useCallback(
    async function (requestData) {
      // console.log(requestData);
      dispatch({ type: 'SEND' });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: 'SUCCESS', responseData });
      } catch (error2) {
        dispatch({
          type: 'ERROR',
          errorMessage: error2.message || 'Something went wrong!',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest2,
    ...httpState,
  };
}

export default useHttp2;
