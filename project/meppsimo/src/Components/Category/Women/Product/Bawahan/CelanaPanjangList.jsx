import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CelanaPanjang from './CelanaPanjang';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class CelanaPanjangList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Celana Panjang</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.celanaPanjangs.map(celanapanjang => {
                                        return <CelanaPanjang key={celanapanjang.id} celanapanjang=
                                        {celanapanjang} />
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

export default CelanaPanjangList;