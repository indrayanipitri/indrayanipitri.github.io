import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbarr';
import HotProductList from './Product/HotProductList';
import Footer from './Footer/Footer';
import CategoryWList from './Category/Women/CategoryWList';
import CategoryMList from './Category/Men/CategoryMList';
import Details from './Details';
import KemejaList from './Category/Women/Product/Atasan/KemejaList';
import BlouseList from './Category/Women/Product/Atasan/BlouseList';
import BajuTanpaLenganList from './Category/Women/Product/Atasan/BajuTanpaLenganList';
import TshirtList from './Category/Women/Product/Atasan/TshirtList';
import BlazerList from './Category/Women/Product/Luaran/BlazerList';
import CardiganList from './Category/Women/Product/Luaran/CardiganList';
import HoodieList from './Category/Women/Product/Luaran/HoodieList';
import JacketList from './Category/Women/Product/Luaran/JacketList';
import CelanaPanjangList from './Category/Women/Product/Bawahan/CelanaPanjangList';
import RokList from './Category/Women/Product/Bawahan/RokList';
import CelanaPendekList from './Category/Women/Product/Bawahan/CelanaPendekList';
// import JeansList from './Category/Women/Product/Bawahan/JeansList';
import DressPanjangList from './Category/Women/Product/Dress/DressPanjangList';
import DressPendekList from './Category/Women/Product/Dress/DressPendekList';
import PashminaList from './Category/Women/Product/Hijab/PashminaList';
import SegiEmpatList from './Category/Women/Product/Hijab/SegiEmpatList';
import Login from './Other/login';
import Signup from './Other/signup';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={HotProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/kategori-wanita" component={CategoryWList} />
                    <Route path="/kategori-pria" component={CategoryMList} />
                    <Route path="/kemeja-wanita" component={KemejaList} />
                    <Route path="/blouse" component={BlouseList} />
                    <Route path="/baju-tanpa-lengan" component={BajuTanpaLenganList} />
                    <Route path="/T-shirt" component={TshirtList}/>
                    <Route path="/blazer" component={BlazerList}/>
                    <Route path="/cardigan-wanita" component={CardiganList}/>
                    <Route path="/hoodie-wanita" component={HoodieList}/>
                    <Route path="/jaket-wanita" component={JacketList}/>
                    <Route path="/celana-panjang-wanita" component={CelanaPanjangList}/>
                    <Route path="/celana-pendek-wanita" component={CelanaPendekList}/>
                    <Route path="/rok" component={RokList}/>
                    {/* <Route path="/jeans-wanita" component={JeansList}/> */}
                    <Route path="/dress-panjang" component={DressPanjangList}/>
                    <Route path="/dress-pendek" component={DressPendekList}/>
                    <Route path="/pashmina" component={PashminaList}/>
                    <Route path="/segi-empat" component={SegiEmpatList}/>
                    <Route path="/masuk" component={Login} />
                    <Route path="/daftar" component={Signup} />
                </Switch>
                <Footer />
                
                    {/* <Route path="/kategori-pria" component={KategoriPria} /> */}
                    {/* <Route path="/kemeja-pria" component={KemejaPria} />
                    <Route path="/polo-pria" component={PoloPria} />
                    <Route path="/kaos-pria" component={Kaos-Pria} />
                    <Route path="/baju-pantai-pria" component={BajuPantaiPria} />
                    <Route path="/cardigans-pria" component={CardigansPria} />
                    <Route path="/hoodie-pria" component={HoodirPria} />
                    <Route path="/jaket-pria" component={JaketPria} />
                    <Route path="/jas" component={Jas} />
                    <Route path="/celana-panjang-pria" component={CelanaPanjangPria} />
                    <Route path="/celana-pendek-pria" component={CelanaPendekPria} />
                    <Route path="/jeans-pria" component={JeansPria} />
                    <Route path="/blouse" component={Blouse} />
                    <Route path="/kemeja-wanita" component={KemejaWanita} />
                    <Route path="/baju-tanpa-lengan" component={BajuTanpaLengan} />
                    <Route path="/kaos-wanita" component={KaosWnita} />
                    <Route path="/blazer" component={Blazer} />
                    <Route path="/cardigans-wanita" component={CardigansWanita} />
                    <Route path="/hoodie-wanita" component={HoodieWanita} />
                    <Route path="/jaket-wanita" component={JaketWanita} />
                    <Route path="/segi-empat" component={SegiEmpat} />
                    <Route path="/pashmina" component={Pashmina} />
                    <Route path="/dress-panjang" component={DressPanjang} />
                    <Route path="/dress-pendek" component={DressPendek} />
                    <Route path="/jeans-wanita" component={JeansWanita} />
                    <Route path="/celana-panjang-wanita" component={CelanaPanjangWanita} />
                    <Route path="/rok" component={Rok} />
                    <Route path="/celana-pendek-wanita" component={Celana-Pendek-Wanita} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/konfirmasi" component={Konfirmasi} />
                    <Route path="/sukses" component={Sukses} />
                    <Route path="/masuk" component={Masuk} />
                    <Route path="/daftar" component={Daftar} /> */}
                 
            </React.Fragment>
        );
    }
}

export default Home;