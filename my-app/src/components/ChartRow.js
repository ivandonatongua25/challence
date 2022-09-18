import React from "react";

function ChartRow(props){
    return (

        <>
        <tr>
            <td>{props.Title}</td>
            <td>{props.length}</td>
            <td>{props.Rating}</td>
            <td>
                <ul>
                    {props.Categories.map(category => <li>{category} </li>)}
                </ul>
            </td>
            <td>{props.Awards}</td>

       
           
        </tr>
        </>
    )
}
export default ChartRow