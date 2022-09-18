import React from "react"
import Categorias from "./Categorias";

import ContentRowProducts from "./ContentRowProducts";
import LastProduct from "./LastProduct";
function ContentRowTop(){

    return(
        <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
                
            <ContentRowProducts />
            <div className="row">
                <LastProduct />
                <Categorias /> 
            </div>
               
        </div>
    

		
    )
}
export default ContentRowTop;