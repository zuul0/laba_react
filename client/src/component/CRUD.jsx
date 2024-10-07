import React from "react";
import { getAll } from "../api/books";
export const Crud = () => {
    const [patients  , setPatients] = React.useState([]);
    React.useEffect(() => {
        getAll().then((data) => {
            setPatients(data);
      
        })
     },  
[]) 
}