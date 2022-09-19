import React from "react"
import Card from "./Card"

let ProductsInDB = {
    title: 'Productos en la Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-film'
}

let totalcategorias = {
    title:' Total de Categorias', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

let valoraciones = {
    title:'Valoraciones Start' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cardProps = [ProductsInDB, totalcategorias, valoraciones]

function CardList () {

return(

	<div className="row">

	{

		cardProps.map((data, i) => {

		return	<Card data ={data} key= {i} />

		})

	}

	</div>

    
)
}

export default CardList

