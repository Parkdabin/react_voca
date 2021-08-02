import { useState, useEffect } from 'react';
import axios from 'axios';

function useGet(url){
    const [data, setdata] = useState([]);
    useEffect(()=>{
        axios.get(url).then(res => {
            setdata(res.data);
            
        }).catch(e =>{
            console.log(e);
        })
    },[url]);
    return data;
}

export default useGet;