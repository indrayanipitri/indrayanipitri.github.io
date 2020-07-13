import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import '../../Product/Product.css';
import {img} from './women/1.jpg';



class CategoryA extends Component {
    render () {
     return (
            <React.Fragment>
                <div className="container women">
                {/* Tops */}

                <section id="id">
                    <div className="row">
                        <div className="col">
                        <h3 className="mb-2"> Atasan</h3>
                        <hr />
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/kemeja-wanita">
                                        <img src="../img/women/1.jpg" className=" img-fluid rounded" alt="..." />
                                        <span> Kemeja </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/T-shirt">
                                        <img src="../img/women/2.jpg"  className=" img-fluid rounded" alt="..." />
                                        <span> T-shirt </span>
                                    </Link>
                                </div>
                            
                        </div>
                    </div>

                    <div className="row mt-0">
                    <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/baju-tanpa-lengan">
                                        <img src="../img/women/3.jpg"  className=" img-fluid rounded" alt="..." />
                                        <span> Baju Tanpa Lengan </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/blouse">
                                        <img src="../img/women/4.jpg"  className=" img-fluid rounded" alt="..." />
                                        <span> Blouse </span>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
                {/* <!--akhir tops--> */}
                

                {/* <!--Outers--> */}
                <section id="outers">
                    <div className="row mt-5">
                        <div className="col">
                            <h3 className="mb-2"> Luaran </h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row mt-2">
                    <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/cardigan-wanita">
                                        <img src="../img/women/5.jpg"  className=" img-fluid rounded" alt="..." />
                                        <span> Cardigans </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/blazer">
                                        <img src="../img/women/6.jpg"  className=" img-fluid rounded" alt="..." />
                                        <span> Blazer </span>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="row mt-0">
                    <div className="col-md-6 col-11 mx-auto">
                                <div className="card img-category">
                                    <Link to="/jaket-wanita">
                                        <img src="../img/women/7.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Jaket </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/hoodie-wanita">
                                        <img src="../img/women/8.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Hoodies </span>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
                {/* <!--Akhir Outers--> */}

                {/* bottoms */}
                <section id="bottoms">
                    <div className="row mt-4">
                        <div className="col">
                            <h3 className="mb-2"> Bawahan</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row mt-2">
                    <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/celana-panjang-wanita">
                                        <img src="../img/women/9.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Celana Panjang </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="">
                                        <img src="../img/women/10.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Jeans </span>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="row mt-0">
                    <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/celana-pendek-wanita">
                                        <img src="../img/women/11.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Celana Pendek </span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/rok">
                                        <img src="../img/women/12.jpg"  className="img-fluid rounded" alt="..." />
                                        <span> Rok </span>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
                {/* Akhir bottoms */}

                {/*  Dresses  */}
                <section id="dresses">
                    <div className="row mt-4">
                    <div className="col-md-6 col-11 mx-auto">
                            <h3 className="mb-2"> Dresses</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row mt-2">
                    <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/dress-panjang">
                                    <img src="../img/women/13.jpg" className="img-fluid rounded" alt="..." />
                                    <span> Dress Panjang</span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/dress-pendek">
                                        <img src="../img/women/14.jpg" className="img-fluid rounded" alt="..." />
                                        <span> Dress Pendek </span>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
                {/* Akhir Dress */}

                 {/* Hijab */}
                <section id="hijab">
                    <div className="row mt-4">
                        <div className="col">
                            <h3 className="mb-2"> Hijab</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row mt-2">
                    <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/segi-empat">
                                    <img src="../img/women/15.jpg" className="img-fluid rounded" alt="..." />
                                    <span> Segi Empat</span>
                                    </Link>
                                </div>
                        </div>
                        <div className="col-md-6 col-11 mx-auto">
                            <div className="card img-category">
                                    <Link to="/pashmina">
                                        <img src="../img/women/16.jpg" className="img-fluid rounded" alt="..." />
                                        <span> Pashmina </span>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </section>
               {/* Akhir Hijab */}
               </div>
            </React.Fragment>
        );
         
    }
}



export default CategoryA;