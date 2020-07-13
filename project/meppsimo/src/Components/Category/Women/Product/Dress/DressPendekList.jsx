import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DressPendek from './DressPendek';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class DressPendekList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.dressPendeks.map(dresspendek => {
                                        return <DressPendek key={dresspendek.id} dresspendek=
                                        {dresspendek} />
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

export default DressPendekList;