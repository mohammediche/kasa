
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



const Gallery =  () => {
    const [data, setData] = useState([]);

    useEffect(()=>{

        axios.get("./db.json")
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
        .catch(error => console.log(error));
    },[])
    // console.log(data);
    


  

    return (
        
        data.map((db)=>{
            return(
                <article className='gallery' key={db.id}>
                    <Link to={`/logement/${db.id}`} title="Voir le logement">
                      <img src={db.cover} alt={db.title} />
                      <h2>{db.title}</h2>
                      <div className="bgGradient"></div>
                   </Link>
                </article>
            )
        })
    
    );

};

export default Gallery;