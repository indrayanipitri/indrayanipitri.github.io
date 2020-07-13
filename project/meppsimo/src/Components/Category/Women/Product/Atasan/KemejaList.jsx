import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KemejaW from './KemejaW';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class KemejaList extends Component {
    render () {
        return (
            
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Kemeja</h5>
                       
                       
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.kemejaWanitas.map(kemejawanita => {
                                        return <KemejaW key={kemejawanita.id} kemejawanita=
                                        {kemejawanita} />
                                    });
                                }}
                            </ProductConsumer>
                       </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default KemejaList;