import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import '../../Product/Product.css';
import { ProductConsumer } from '../../../context';


class CategoryB extends Component {
    render () {
        const {id, img, name} = this.props.categorywomenbawahan;

        return (
            <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-6
            my-3">
                <div className="card img-category">
                    
                       <Link to="/details">
                           <img src={img} alt="product" className='card-img-top' /><span>{name}</span>
                       </Link>
                    </div>
               
            </ProductWrapper>
        );
        
    }
}

const ProductWrapper = styled.div`
`

export default CategoryB;