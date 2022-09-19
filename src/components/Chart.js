import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component{
    constructor(){
        super()
        this.state = {

            productList: null

        }
    }

componentDidMount(){

    fetch("http://localhost:3001/api/products")
    .then( res => res.json())
    .then(productos => {

        this.setState ({ productList: productos.data})

    console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", productos )

   
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
                                <th>name</th>
                                <th>price</th>
                                <th>description</th>
                                <th>brand_id</th>
                                <th>maerial_id</th>
                                <th>color_id</th>
                            </tr>
                        </thead>
                        <tbody>


                    { this.state.productList ? this.state.productList.map ((row, i) =>

                        <ChartRow {...row} key={i}  />) : <div> Loading... </div>
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Chart