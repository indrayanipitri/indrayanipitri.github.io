import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../../context';
import './Product.css';


import Card from 'react-bootstrap/Card';

class Gallery extends Component {
    render () {
        const  {id, img } = this.props.gallery;
        return (
            <div className="gallery">
                
                    <Card className="card-img">
                        <Link to="/" className="ab">
                        <Card.Img src={img} />    
                        </Link>
                    </Card>
            
            </div>
            );
        }
    }
    
    
    
    export default Gallery;