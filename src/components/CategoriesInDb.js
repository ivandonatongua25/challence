import React, {Component} from "react";
import Category from "./Category";

class CategoriesInDb extends Component {
    
	constructor(){
		super()

		this.state = {

			BrandList : []

		}
	}

	componentDidMount() {

		fetch("http://localhost:3001/api/brand")

		.then(respuesta => {
				
		return respuesta.json()})
		
		.then(brands =>{

		this.setState({BrandList: brands.data})

        console.log("🚀 ~ file: CategoriesInDb.js ~ line 27 ~ CategoriesInDb ~ componentDidMount ~ brands.data}", brands.data)

		})



	}

	cambiarBackground(){
		let background = document.querySelector(".genres-background")
		background.classList.add('bg-secondary')
	}

	render(){
	return(

        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 onMouseOver = {()=> this.cambiarBackground()} className="m-0 font-weight-bold text-gray-800">Categorias de Productos</h5>
								</div>
								<div className="card-body genres-background">
									<div className="row">

										{this.state.BrandList.map((brand, i) => {

											return  <Category {...brand} key={i} />
										})
										}
									</div>
								</div>
							</div>
						</div>
					

    )
}
}
export default CategoriesInDb