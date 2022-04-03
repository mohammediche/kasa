import axios from 'axios';
// import React, { useEffect, useState } from 'react';

const Gallery = () => {
 
    axios.get("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
    .then((res)=>{
        console.log(res);
    })
    .catch(error => console.log(error));
    return (
        <div>
            
        </div>
    );
};

export default Gallery;