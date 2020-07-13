import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cardigan from './Cardigan';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class CardiganList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Cardigan</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Cardigans.map(cardigan => {
                                        return <Cardigan key={cardigan.id} cardigan=
                                        {cardigan} />
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

export default CardiganList;