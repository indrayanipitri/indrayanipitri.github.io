import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CategoryA from './CategoryA';
import {ProductConsumer} from '../../../context';
import './../../Product/Product.css';


class CategoryWList extends Component {
    render () {
        return (
            <React.Fragment>
                <div class="container">
                    <nav>
                    <ol class="breadcrumb bg-transparent pl-1">
                        <li class="breadcrumb-item">
                            <Link to="/"> Home </Link>
                        </li>
                        <li class="breadcrumb-item" active aria-current="page"> Category </li>
                    </ol>
                    </nav>
                </div>
               <div className="py-2">
                   <div className="container category">
                       <h5 className="category-title text-center">wanita</h5>
                       
                
                       <div className="row mb-5"> 
                            < CategoryA />
                       </div>
                   </div>
               </div>

           </React.Fragment>
        );
    }
}

export default CategoryWList;