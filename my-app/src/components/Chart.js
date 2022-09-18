import React from 'react';
import ChartRow from './ChartRow'



let tablerowsData = [
    {
        Title: 'Billy Elliot',
        length:'123',
        Rating:'5',
        Categories: ['Drama ', ' Comedia '],
        Awards: 2
    },
    {
        Title: 'Alicia en el pais de las maravias',
        length:'142',
        Rating:'4.8',
        Categories: [' Drama ', ' Accion',' Comedia'],
        Awards: 3


    }
]

function Chart(){
    return (
        <div className="sombra de tarjeta mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </thead>
                        <tbody>
                    { 
                        tablerowsData.map((row, i) =>{
                            return <ChartRow {...row} key={i} />
                        })

                       
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}
export default Chart;