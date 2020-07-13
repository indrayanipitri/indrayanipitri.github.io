import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rok from './Rok';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class RokList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Roks.map(rok => {
                                        return <Rok key={rok.id} rok=
                                        {rok} />
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

export default RokList;