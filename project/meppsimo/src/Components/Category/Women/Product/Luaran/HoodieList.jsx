import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hoodie from './Hoodie';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class HoodieList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Hoodies</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Hoodies.map(hoodie => {
                                        return <Hoodie key={hoodie.id} hoodie=
                                        {hoodie} />
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

export default HoodieList;