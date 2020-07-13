import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blouse from './Blouse';
import {ProductConsumer} from '../../../../../context';
import './../../../../Product/Product.css';

class BlouseList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="py-5">
                   <div className="container category">
                       <h5 className="category-title text-center mb-3">Blouse</h5>
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.blouseWanitas.map(blouse => {
                                        return <Blouse key={blouse.id} blouse=
                                        {blouse} />
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

export default BlouseList;