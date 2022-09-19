import React, { Component } from 'react';
import ChartDetail from './ChartDetail';


class Detail extends Component{
    constructor(){
        super()
        this.state = {

            product: null

        }
    }

componentDidMount(){

    fetch("http://localhost:3001/api/products/:id")
    
    .then(productos => {

        this.setState ({ product: productos.data})

    console.log("🚀 ~ file: Detail.js ~ line 19 ~ Detail ~ componentDidMount ~ data ", productos )

   
    })

    .catch(error => console.log(error))

}


render(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                                <th>description</th>
                                <th>brand_id</th>
                                <th>maerial_id</th>
                                <th>color_id</th>
                            </tr>
                        </thead>
                        <tbody>


                    
                    { 
                    this.state.product ? this.state.product.map ((row, i) =>

                        <ChartDetail {...row} key={i}  />) : <div> Loading... </div>
                        
}

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Detail