import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelanaPendek from './CelanaPendek';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class CelanaPendekList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.celanaPendeks.map(celanapendek => {
                                        return <CelanaPendek key={celanapendek.id} celanapendek=
                                        {celanapendek} />
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

export default CelanaPendekList;