import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import {Link} from 'react-router-dom';
import './Product/Product.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container py-1">
                    <nav>
                        <ol className="breadcrumb bg-transparent pl-1">
                            <li className="breadcrumb-item">
                                <Link to="./"> Home </Link>
                            </li>
                            <li className="breadcrumb-item" active aria-current="page"> Single Product </li>
                        </ol>
                    </nav>
                </div>
                <ProductConsumer>
                    {value => {
                        const { id, estimasi, img, desc, price, title, designImg, 
                            designName, inCart
                        } = value.detailProduct;
                        
                        return (
                            <div className="container container-detail py-3">
                                {/* product info */}
                                <div className="row">
                                    <div className="col-10 col-md-5 mx-auto 
                                    text-capitalize">
                                        <img src={img} className="img-fluid img-single" alt="product"
                                        />
                                    </div>
                                    <div className="col-10  col-md-7 mx-auto detail
                                    text-capitalize title">
                                        <h3>{title}</h3>
                                        <p className="text-muted"> Rp. {price}</p>
                                        <button className="btn btn-sm btnminus" type="button" ><i
                                            className="fas fa-minus-circle"></i></button>
                                        <span className="mx-2"> 2 </span>
                                        <button className="btn btn-sm btnplus" type="button"><i className="fas fa-plus-circle"></i>
                                        </button>
                                        <p className="mt-3"> Size </p> 
                                        <div>
                                            <Link to="">
                                                <button className="btn  btn-product" type="button">
                                                            Add to Cart
                                                </button>
                                            </Link> 
                                        </div>
                                        <div className="ket-product">
                                            <p className="mt-3 pl-1 text-muted" >
                                                {estimasi} </p>
                                        </div>
                                        <div className="designed-by">
                                            <h5>Design by</h5>
                                            <div className="row">
                                                <div className="col-2 mr-2">
                                                    <img src={designImg} alt="" className="design-img" />
                                                </div>
                                                <div className="col">
                                                    <h4>{designName}</h4>
                                                    <p>1.1Jt Followers</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-3">
                                    <div className="col-md-9 col-sm-9 ">
                                    
                                        <Tabs className="description-review">
                                            <TabList>
                                                <Tab>Deskripsi</Tab>
                                                <Tab>Review</Tab>
                                            </TabList>

                                            <TabPanel >
                                            <div className="product-description">
                                                <p>{desc}</p>
                                                <p>{desc}</p>
                                            </div>
                                            </TabPanel>
                                            <TabPanel >
                                                <div className="product-review">
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h5>Taeyeon</h5>
                                                            <p>wah ini sih bagus banget!pas banget di aku!</p>
                                                        </div>
                                                        </div>
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h5>Airin Kim</h5>
                                                            <p>Waw produk nya bagus sekali, aku suka aku suka!</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-1">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div className="col">
                                                            <h5>Indrayani Pitri</h5>
                                                            <p>bahannya lembut ukurannya pas! puas bangett</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-1">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <h5>Seulgi </h5>
                                                                <p>Gak nyesel belinya ih! suka bangett! love!</p>
                                                            </div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-1">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <h5>Joy RV</h5>
                                                                <p>Sesuai dengan harapanku! </p>
                                                            </div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-1">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <h5>Wendy</h5>
                                                                <p>wah daebak banget sih ini mah yaaaa</p>
                                                            </div>
                                                    </div>
                                                    <div className="row">
                                                            <div className="col-1">
                                                                <img src="" alt="" />
                                                            </div>
                                                            <div className="col">
                                                                <h5>Yeri</h5>
                                                                <p>aku suka aku suka aku suka. love banget sama product ini :)</p>
                                                            </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </Tabs>
 
                                    </div>
                                </div>

                                

                            </div>
                        );
                    }}
                </ProductConsumer> 

            </React.Fragment>
        );
    }
}

export default Details;