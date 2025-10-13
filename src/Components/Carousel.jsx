import React, { useContext, useEffect } from 'react'
import { DataContext } from '../Context/DataContext'

const Carousel = () => {
    const {data, fetchAllProds} = useContext(DataContext);
    
    useEffect(()=> {
        fetchAllProds();
    },[])

  return (
    <div>Carousel</div>
  )
}

export default Carousel