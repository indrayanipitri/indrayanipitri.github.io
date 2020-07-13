import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../../../../context';
import './../../../../Product/Product.css';

import Figure from 'react-bootstrap/Figure';

class Blouse extends Component {
    render () {
        const {id, title, img, price, inCart} = this.props.blouse;
        return ( 
            <div className="container mx-auto my-3 col-lg-3 col-md-4 col-6 figure">
                <ProductConsumer>
                {(value) => (
                        <Figure onClick = {() =>
                            value.handleDetailBlouse(id)}>
                            <Link to="/details">
                                <Figure.Image
                                    alt="product"
                                    src={img}/>
                            </Link>
                            <Figure.Caption>
                                <h5 className="mb-1"> {title} </h5>
                                <p> Rp. {price}</p>
                            </Figure.Caption>
                        </Figure>
                    )}
                </ProductConsumer>
            </div>
        );
    } 
}



export default Blouse;

