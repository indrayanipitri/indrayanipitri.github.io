import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tshirt from './Tshirt';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class TshirtList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">T-shirt</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.Tshirts.map(tshirt => {
                                        return <Tshirt key={tshirt.id} tshirt=
                                        {tshirt} />
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

export default TshirtList;