import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pashmina from './Pashmina';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class PashminaList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Pashminas.map(pashmina => {
                                        return <Pashmina key={pashmina.id} pashmina=
                                        {pashmina} />
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

export default PashminaList;