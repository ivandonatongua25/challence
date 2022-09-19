import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.name}</td>
        <td>{props.price ? props.price : "-"}</td>
        <td>{props.description ? props.description : "-"}</td>
        <td>{props.brand_id ? props.brand_id :"-"}</td>
        <td>{props.material_id ? props.maerial_id : "-"}</td>
        <td>{props.color_id ? props.color_id : "-"}</td>
        </tr>


    </React.Fragment>


)
}

export default ChartRow