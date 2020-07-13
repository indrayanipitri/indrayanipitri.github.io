import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HotProduct from './HotProduct';
import Title from './Title';
import Gallery from './Gallery';
import Designer from '../Designer/Designer';
import {ProductConsumer} from '../../context'; 
import slider from './bg.png';
 
import  CardColumns from 'react-bootstrap/CardColumns';
import Carousel from 'react-bootstrap/Carousel';

class HotProductList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="carousel">
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {slider}
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src= {slider}
                    alt="Third slide"
                    />
                </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src= {slider}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

                <div className="py-3">
                    <div className="container">
                        <Title title="hot product" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.hotProducts.map(hotproduct => {
                                        return <HotProduct key={hotproduct.id} hotproduct={hotproduct} />
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                
                <div className="py-3">
                    <div className=" container container-gallery">
                        <Title title="gallery" />
                        <div className="img-gallery">
                        <CardColumns>
                            <ProductConsumer>
                                {value => {
                                    return value.Gallerys.map(gallery => {
                                        return <Gallery key={gallery.id} gallery={gallery} />
                                    });
                                }}
                            </ProductConsumer>
                        </CardColumns>
                        </div>
                    </div>
                </div>

                <div className="py-3">
                    <div className="container">
                        <Title title="designer" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.Designers.map(designer => {
                                        return <Designer key={designer.id} designer={designer} />
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

export default HotProductList;