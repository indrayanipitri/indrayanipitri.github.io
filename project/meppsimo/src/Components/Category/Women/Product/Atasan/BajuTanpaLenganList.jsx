import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BajuTanpaLengan from './BajuTanpaLengan';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class BajuTanpaLenganList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Baju Tanpa Lengan</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.bajutanpalengans.map(bajutanpalengan => {
                                        return <BajuTanpaLengan key={bajutanpalengan.id} bajutanpalengan=
                                        {bajutanpalengan} />
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

export default BajuTanpaLenganList;