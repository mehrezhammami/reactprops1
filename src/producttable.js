import React from 'react';
const Producttable = (props) => {
    return ( 
        <table border="1">
            <tr>
                <th>name</th> 
                <th>categorie</th>  
                <th>prix</th>  
            </tr>       
    {props.table.map(el=>
    <tr>
    <td>  {el.name}</td>
    <td>{el.categorie}</td>
    <td>{el.prix}</td>
    </tr>)}
    </table> );
}
 
export default Producttable;