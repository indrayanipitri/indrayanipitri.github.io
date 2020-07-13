import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Product/Product.css';

import Figure from 'react-bootstrap/Figure';

class Designer extends Component {
    render () {
        const {id, img, name} = this.props.designer;
            return (
                
                <div className="container mx-auto my-3 col-3  text-center  figure">
                    <Figure className="designer">
                        <Link to="/detail">
                            <Figure.Image
                                alt="product"
                                src={img}
                                className="img-fluid rounded"
                            />
                        </Link>
                        <Figure.Caption className="figure-caption">
                            <h4 className="mb-1 "> {name} </h4>
                            
                        </Figure.Caption>
                    </Figure>
                </div>
        );
    }
}

export default Designer;