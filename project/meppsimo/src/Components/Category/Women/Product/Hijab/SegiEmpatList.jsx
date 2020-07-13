import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SegiEmpat from './SegiEmpat';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class SegiEmpatList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.SegiEmpats.map(segiempat => {
                                        return <SegiEmpat key={segiempat.id} segiempat=
                                        {segiempat} />
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

export default SegiEmpatList;