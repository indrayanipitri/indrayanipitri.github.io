import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blazer from './Blazer';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class BlazerList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Blazer</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Blazers.map(blazer => {
                                        return <Blazer key={blazer.id} blazer=
                                        {blazer} />
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

export default BlazerList;