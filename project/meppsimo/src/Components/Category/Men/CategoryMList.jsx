import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CategoryA from './CategoryA';
import CategoryL from './CategoryL';
import CategoryB from './CategoryB';
import CategoryD from './CategoryD';
import CategoryH from './CategoryH';
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
                       <p className="text-left category-subtitle">Atasan</p>
                       <hr />
                       <div className="row mb-5"> 
                            <ProductConsumer>
                                {value => {
                                    return value.categoryWomenAtasans.map(categorywomenatasan => {
                                        return <CategoryA key={categorywomenatasan.id} categorywomenatasan=
                                        {categorywomenatasan} />
                                    });
                                }}
                            </ProductConsumer>
                       </div>
                       <p className="text-left category-subtitle">Luaran</p>
                       <hr />
                       <div className="row mb-5"> 
                            <ProductConsumer>
                                {value => {
                                    return value.categoryWomenLuarans.map(categorywomenluaran => {
                                        return <CategoryL key={categorywomenluaran.id} categorywomenluaran=
                                        {categorywomenluaran} />
                                    });
                                }}
                            </ProductConsumer>
                       </div>
                       <p className="text-left category-subtitle">Bawahan</p>
                       <hr />
                       <div className="row mb-5"> 
                            <ProductConsumer>
                                {value => {
                                    return value.categoryWomenBawahans.map(categorywomenbawahan => {
                                        return <CategoryB key={categorywomenbawahan.id} categorywomenbawahan=
                                        {categorywomenbawahan} />
                                    });
                                }}
                            </ProductConsumer>
                       </div>
                       <p className="text-left category-subtitle">Dress</p>
                       <hr />
                       <div className="row mb-5"> 
                            <ProductConsumer>
                                {value => {
                                    return value.categoryWomenDresss.map(categorywomendress => {
                                        return <CategoryD key={categorywomendress.id} categorywomendress=
                                        {categorywomendress} />
                                    });
                                }}
                            </ProductConsumer>
                       </div>
                       <p className="text-left category-subtitle">Hijab</p>
                       <hr />
                       <div className="row "> 
                            <ProductConsumer>
                                {value => {
                                    return value.categoryWomenHijabs.map(categorywomenhijab => {
                                        return <CategoryH key={categorywomenhijab.id} categorywomenhijab=
                                        {categorywomenhijab} />
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

export default CategoryWList;