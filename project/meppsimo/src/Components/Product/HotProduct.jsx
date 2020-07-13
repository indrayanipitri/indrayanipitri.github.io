import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../context';
import './Product.css';
import PropTypes from 'prop-types';

import Figure from 'react-bootstrap/Figure';

class HotProduct extends Component {
    render () {
        const {id, title, img, price, inCart} = this.props.hotproduct;
        return (
            
            <div className="container mx-auto my-3 col-4 figure">
                <ProductConsumer>
                    {(value) => (
                        <Figure onClick = {() =>
                            value.handleDetailHotProduct(id)}>
                            <Link to="/details">
                                <Figure.Image
                                    alt="product"
                                    src={img}
                                />
                            </Link>
                            <Figure.Caption>
                                <h5 className="mb-1"> {title} </h5>
                                <p>Rp. {price}</p>
                            </Figure.Caption>
                        </Figure>
                    )}
                </ProductConsumer>
            </div>
            
        );
    }
}



export default HotProduct;

