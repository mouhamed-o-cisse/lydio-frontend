import GetExchanges from "../components/Exchange/GetExchanges";
import AddExchanges from "../components/Exchange/AddExchange";
import { useEffect } from 'react';
import { Fragment } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';
import { getExchanges } from '../lib/api';

import './Common.css';


function Exchange (){

    const { sendRequest, status, data: loadedExchanges, error } = useHttp(
        getExchanges,
        true
      );
    
      useEffect(() => {
        sendRequest();
      }, [sendRequest]);
    
    
      if (status === 'pending') {
        return (
          <div className='centered'>
            <LoadingSpinner />
          </div>
        );
      }
    
      if (error) {
        return <p className='centered focused'> {error}</p>;
      }
    
      if (status === 'completed-successfully' && (!loadedExchanges || loadedExchanges.length === 0)) {
        // return <NoQuotesFound />;
        return (
         <div>
            <h1 className='title'> Echanges : {loadedExchanges.length} </h1>
            <p>Pas d'echange</p>
          </div>
          )
      }
        return (
          <Fragment>
            <AddExchanges />
            <h1 className='title'> Echanges : {loadedExchanges.length} </h1>
            <GetExchanges exchanges={loadedExchanges} orderLength={loadedExchanges.length} />
          </Fragment>    
        );

}

export default Exchange;