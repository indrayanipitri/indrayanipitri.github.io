import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class signup extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-signup">
                
                    <div className="container-backgroundsignup">
                        <div className="row text-center">
                            <div className="col">
                                <h2> Daftar </h2>
                            </div>
                        </div>

                        <form className="p-4 mr-3 ml-3">

                            <div className="form-group">
                                <label for="email">Nama Lengkap </label>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last name" />
                                        </div>
                                    </div>
                            </div>

                            <div className="form-group">
                                <label for="email">Tanggal Lahir</label>
                                <div className="row">
                                    <div className="col-2">
                                        <input type="text" class="form-control text-center" placeholder="Tgl" />
                                    </div>
                                    <div class="col-3">
                                        <select className="custom-select">
                                            <option selected>Bulan</option>
                                            <option value="1">Januari</option>
                                            <option value="2">Februari</option>
                                            <option value="3">Maret</option>
                                            <option value="1">April</option>
                                            <option value="2">Mei</option>
                                            <option value="3">Juni</option>
                                            <option value="1">Juli</option>
                                            <option value="2">Agustus</option>
                                            <option value="3">September</option>
                                            <option value="1">Oktober</option>
                                            <option value="2">November</option>
                                            <option value="3">Desember</option>
                                        </select>
                                    </div>
                                    <div className="col-3">
                                        <input type="text" className="form-control text-center" placeholder="Tahun" />
                                    </div>
                                </div>
                            </div>
                
                            <div className="form-group">
                                <label for="alamat">Alamat</label>
                                <input className="form-control" type="text" placeholder="Alamat Lengkap" />
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="negara">Negara</label>
                                            <select className="custom-select">
                                                <option select>Pilih Negara</option>
                                                <option value="1">Indonesia</option>
                                                <option value="2">Malaysia</option>
                                                <option value="3">Singapore</option>
                                            </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="negara">Provinsi</label>
                                        <select className="custom-select">
                                            <option select>Pilih Provinsi</option>
                                            <option value="1">DKI Jakarta</option>
                                            <option value="2">Jawa Barat</option>
                                            <option value="3">Jawa Timur</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label for="negara">Kota</label>
                                    <select className="custom-select">
                                        <option select>Pilih Kota</option>
                                        <option value="1">Jakarta</option>
                                        <option value="2">Bandung</option>
                                        <option value="3">Surabaya</option>
                                    </select>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label for="email">Email</label>
                                <div className="row">
                                    <div className="col-7">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="password">Password</label>
                                    <div className="row">
                                        <div className="col-5">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                            </div>
                    
                            <div className="row justify-content-end ">
                                <div className="col-2 mr-5 mb-2">
                                    <Link to=""> 
                                        <button  type="button" className="btn login-btn" >Submit</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default signup;