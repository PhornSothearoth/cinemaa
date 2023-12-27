import React, { useEffect, useState } from 'react'
import TrailerLists from './TrailerLists';
import '../App.css';
import Loading from '../page/Loading';

export default function Trailer() {

    const [trailers, setTrailers] = useState([])
    const [loading, setLoading] =useState([true])


    

    const getMovieRequest = async () => {
        const url = (`https://www.omdbapi.com/?s=all&apikey=b95d6092`)
         const response = await fetch(url);
         const responseJson = await response.json();
         setTrailers(responseJson.Search)
         setLoading(false)
      };
    
      useEffect(() => {
       getMovieRequest();
      }, []);

  return (
    
    <section>
      <div className='flex-nowrap flex justify-start m-3 gap-4 cursor-pointer'>
      {loading ? <Loading/> : trailers.length > 0 && 
      <TrailerLists trailers={trailers} />}
      </div>
    </section>
  )
}



// overflow-x-auto flex-nowrap flex justify-start m-3 gap-4