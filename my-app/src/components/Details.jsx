import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Details() {
    
    const [details, setdetails] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:5005/api/phones/${id}`)
        
        .then((response)=>{

            setdetails(response.data)})        
        .catch((error) => console.log(error));
    },[id])


    if (Object.keys(details).length === 0) <p>Loading...</p>

    return(
        <div className= 'phone-details'>
            <h1>{details.name}</h1>
            <img  width={'100px'}  src={`/images/${details.imageFileName}`} alt={details.name} /> 
            <p>{details.manufacturer}</p>
            <p>{details.description}</p>
            <p>Color: {details.color}</p>
            <p>Price: {details.price}</p>
            <p>Screen: {details.screen}</p>
            <p>Processor: {details.processor}</p>
            <p>Ram: {details.ram}</p>

        </div>
    )
 }


export default Details