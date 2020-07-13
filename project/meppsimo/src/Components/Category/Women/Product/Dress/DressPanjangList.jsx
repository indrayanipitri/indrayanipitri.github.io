import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DressPanjang from './DressPanjang';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class DressPanjangList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.dressPanjangs.map(dresspanjang => {
                                        return <DressPanjang key={dresspanjang.id} dresspanjang=
                                        {dresspanjang} />
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

export default DressPanjangList;