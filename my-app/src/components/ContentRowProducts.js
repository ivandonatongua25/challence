import React from "react"
import Producto from "./Producto"


let moviesInDB={
    title: 'Movies in Data Base',
    color: 'primary',
    cuantity: 21,
    icon:'fa-film'
}
let totalAwards={
    title: 'Total Awards',
    color: 'success',
    cuantity: 79,
    icon:'fa-award'
}
let actorsQuantity={
    title: 'Actors Quantity',
    color: 'warning',
    cuantity: 49,
    icon:'fa-user-check'
}
let cardProps =[moviesInDB,totalAwards,actorsQuantity]



function ContentRowProducts(){

    return(

        <div className="row">
           {
                cardProps.map((Data,id)=>{
                    return <Producto  Data {...Data} key = {id} />

                })
           } 
        </div>
			

		
    )
}
export default ContentRowProducts;