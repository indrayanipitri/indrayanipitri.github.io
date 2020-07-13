import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jacket from './Jacket';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class JacketList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Jacket</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Jackets.map(jacket => {
                                        return <Jacket key={jacket.id} jacket=
                                        {jacket} />
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

export default JacketList;